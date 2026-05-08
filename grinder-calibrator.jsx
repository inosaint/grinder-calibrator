import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { History, Volume2, VolumeX, ChevronDown, Coffee, Lock, Unlock } from 'lucide-react';

// ========== GRINDER CONFIG (extensible) ==========
const GRINDERS = {
  commandante: {
    id: 'commandante',
    name: 'Comandante',
    model: 'C40',
    subtitle: 'MK4 Nitro Blade',
    minClick: 0,
    maxClick: 40,
    micronsPerClick: 30,
    zeroOffset: 0,
    majorTick: 5,
    accentColor: '#c89d6a',
    methodRanges: {
      espresso: [7, 13],
      moka: [14, 20],
      aeropress: [18, 28],
      v60: [18, 24],
      chemex: [25, 32],
      french: [28, 36],
      cold: [32, 40],
    },
  },
  timemore_s3: {
    id: 'timemore_s3',
    name: 'Timemore Chestnut',
    model: 'S3',
    subtitle: 'S3 · S2C890',
    minClick: 0,
    maxClick: 90,
    micronsPerClick: 15,
    zeroOffset: 75,
    majorTick: 10,
    accentColor: '#9bb086',
    methodRanges: {
      espresso: [1, 15],
      moka: [22, 34],
      aeropress: [28, 48],
      v60: [30, 42],
      chemex: [44, 58],
      french: [52, 68],
      cold: [60, 76],
    },
  },
  timemore_c2: {
    id: 'timemore_c2',
    name: 'Timemore Chestnut',
    model: 'C2',
    subtitle: 'C2 · Standard',
    minClick: 0,
    maxClick: 36,
    micronsPerClick: 80,
    zeroOffset: 0,
    majorTick: 6,
    accentColor: '#b89a7c',
    methodRanges: {
      espresso: [6, 12],
      moka: [9, 15],
      aeropress: [11, 19],
      v60: [15, 22],
      chemex: [24, 32],
      french: [22, 30],
      cold: [26, 36],
    },
  },
};

const METHODS = [
  { id: 'v60', label: 'V60' },
  { id: 'espresso', label: 'Espresso' },
  { id: 'aeropress', label: 'AeroPress' },
  { id: 'moka', label: 'Moka' },
  { id: 'chemex', label: 'Chemex' },
  { id: 'french', label: 'French Press' },
  { id: 'cold', label: 'Cold Brew' },
];

// ========== AUDIO ENGINE ==========
class ClickAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {}
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
  click(variant = 'detent') {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;

    // Noise burst (the "tick")
    const bufSize = Math.floor(this.ctx.sampleRate * 0.04);
    const buffer = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.15));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = variant === 'edge' ? 1200 : 2400;
    noiseFilter.Q.value = 2;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(variant === 'snap' ? 0.18 : 0.09, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start(t);
    noise.stop(t + 0.05);

    // Low thump (the "body")
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(variant === 'snap' ? 180 : 90, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.05);
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.06, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.07);

    if (variant === 'snap') {
      // Subtle chime overlay for in-range
      const chime = this.ctx.createOscillator();
      chime.type = 'triangle';
      chime.frequency.value = 1760;
      const chimeGain = this.ctx.createGain();
      chimeGain.gain.setValueAtTime(0.04, t);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      chime.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);
      chime.start(t);
      chime.stop(t + 0.25);
    }
  }
}

// ========== MAPPING LOGIC ==========
function clickToMicrons(grinder, click) {
  return grinder.zeroOffset + click * grinder.micronsPerClick;
}
function micronsToClick(grinder, microns) {
  const raw = (microns - grinder.zeroOffset) / grinder.micronsPerClick;
  return Math.max(grinder.minClick, Math.min(grinder.maxClick, Math.round(raw)));
}
function mapClicks(fromGrinder, toGrinder, click) {
  const microns = clickToMicrons(fromGrinder, click);
  return micronsToClick(toGrinder, microns);
}

// ========== DIAL COMPONENT ==========
function Dial({ grinder, click, setClick, methodId, audio, isSource }) {
  const dialRef = useRef(null);
  const dragRef = useRef({ active: false, startAngle: 0, startClick: 0 });
  const lastSoundClickRef = useRef(click);
  const range = grinder.methodRanges[methodId];
  const totalClicks = grinder.maxClick - grinder.minClick;

  // 0 click at top (-90°), increasing clockwise across 270° sweep
  const clickToAngleDeg = (c) => {
    const t = (c - grinder.minClick) / totalClicks;
    return -90 + t * 270;
  };
  const angleDeg = clickToAngleDeg(click);

  const getAngleFromEvent = (e) => {
    const rect = dialRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - cx;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - cy;
    return (Math.atan2(y, x) * 180) / Math.PI;
  };

  const handlePointerDown = (e) => {
    audio.init();
    e.preventDefault();
    dragRef.current = {
      active: true,
      startAngle: getAngleFromEvent(e),
      startClick: click,
    };
  };

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragRef.current.active) return;
      const currentAngle = getAngleFromEvent(e);
      let delta = currentAngle - dragRef.current.startAngle;
      while (delta > 180) delta -= 360;
      while (delta < -180) delta += 360;
      const clickDelta = (delta / 270) * totalClicks;
      const newClick = Math.max(
        grinder.minClick,
        Math.min(grinder.maxClick, Math.round(dragRef.current.startClick + clickDelta))
      );
      setClick(newClick);
    },
    [grinder, setClick, totalClicks]
  );

  const handlePointerUp = () => {
    dragRef.current.active = false;
  };

  useEffect(() => {
    const move = (e) => handlePointerMove(e);
    const up = () => handlePointerUp();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [handlePointerMove]);

  // Play click sound when click changes
  useEffect(() => {
    if (lastSoundClickRef.current !== click) {
      const inRange = click >= range[0] && click <= range[1];
      const wasInRange = lastSoundClickRef.current >= range[0] && lastSoundClickRef.current <= range[1];
      const enteringRange = inRange && !wasInRange;
      const atEdge = click === grinder.minClick || click === grinder.maxClick;
      audio.click(atEdge ? 'edge' : enteringRange ? 'snap' : 'detent');
      lastSoundClickRef.current = click;
    }
  }, [click, range, grinder, audio]);

  const adjustClick = (delta) => {
    audio.init();
    const newClick = Math.max(
      grinder.minClick,
      Math.min(grinder.maxClick, click + delta)
    );
    if (newClick !== click) setClick(newClick);
  };

  const knurlTicks = useMemo(() => {
    const ticks = [];
    for (let i = 0; i < 60; i++) ticks.push((i / 60) * 360);
    return ticks;
  }, []);

  const numberedTicks = useMemo(() => {
    const ticks = [];
    for (let c = grinder.minClick; c <= grinder.maxClick; c++) {
      const isMajor = c % grinder.majorTick === 0;
      ticks.push({ click: c, angle: clickToAngleDeg(c), isMajor });
    }
    return ticks;
    // eslint-disable-next-line
  }, [grinder]);

  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle + 90);
    const end = polarToCartesian(cx, cy, r, startAngle + 90);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const inRecommended = click >= range[0] && click <= range[1];

  return (
    <div className="flex flex-col items-center select-none">
      {/* Grinder name plate */}
      <div className="mb-3 px-3 py-1.5 rounded-md flex flex-col items-center"
        style={{
          background: 'linear-gradient(180deg, #1f1c1a 0%, #141211 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6)',
          border: '1px solid #0a0908',
        }}>
        <div className="text-[11px] tracking-[0.18em] uppercase text-stone-200" style={{ fontFamily: '"DM Mono", "Courier New", monospace' }}>
          {grinder.name}{grinder.model ? ` ${grinder.model}` : ''}
        </div>
        <div className="text-[9px] tracking-[0.25em] uppercase mt-0.5" style={{ color: grinder.accentColor, fontFamily: '"DM Mono", monospace' }}>
          {grinder.subtitle}
        </div>
      </div>

      <div className="relative" style={{ width: 280, height: 280 }}>
        {/* Outer body */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 25%, #2a2724 0%, #0a0908 80%)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)',
          }}
        />

        {/* Bezel + ticks (SVG) */}
        <svg className="absolute inset-0" viewBox="0 0 280 280" style={{ pointerEvents: 'none' }}>
          <defs>
            <radialGradient id={`bezelGrad-${grinder.id}`} cx="30%" cy="20%">
              <stop offset="0%" stopColor="#3a3530" />
              <stop offset="60%" stopColor="#1a1715" />
              <stop offset="100%" stopColor="#050403" />
            </radialGradient>
            <linearGradient id={`bezelHi-${grinder.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </linearGradient>
          </defs>

          <circle cx="140" cy="140" r="138" fill={`url(#bezelGrad-${grinder.id})`} />
          <circle cx="140" cy="140" r="138" fill={`url(#bezelHi-${grinder.id})`} />

          {/* Recommended range arc */}
          <path
            d={describeArc(140, 140, 124, clickToAngleDeg(range[0]), clickToAngleDeg(range[1]))}
            fill="none"
            stroke={grinder.accentColor}
            strokeWidth="3"
            strokeLinecap="round"
            opacity={inRecommended ? 0.95 : 0.5}
            style={{
              filter: inRecommended ? `drop-shadow(0 0 6px ${grinder.accentColor})` : 'none',
              transition: 'opacity 0.3s, filter 0.3s',
            }}
          />

          {/* Tick marks */}
          {numberedTicks.map((t) => {
            const rad = ((t.angle - 90) * Math.PI) / 180;
            const r1 = 116;
            const r2 = t.isMajor ? 106 : 112;
            const x1 = 140 + r1 * Math.cos(rad);
            const y1 = 140 + r1 * Math.sin(rad);
            const x2 = 140 + r2 * Math.cos(rad);
            const y2 = 140 + r2 * Math.sin(rad);
            return (
              <line
                key={t.click}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={t.isMajor ? '#d4ccc0' : '#6a625a'}
                strokeWidth={t.isMajor ? 1.5 : 0.8}
                opacity={0.8}
              />
            );
          })}

          {/* Major numbers */}
          {numberedTicks.filter((t) => t.isMajor).map((t) => {
            const rad = ((t.angle - 90) * Math.PI) / 180;
            const r = 96;
            const x = 140 + r * Math.cos(rad);
            const y = 140 + r * Math.sin(rad);
            return (
              <text
                key={`num-${t.click}`}
                x={x}
                y={y}
                fill="#a8a098"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: '"DM Mono", monospace', fontWeight: 500 }}
              >
                {t.click}
              </text>
            );
          })}
        </svg>

        {/* Inner rotating cap (knurled) */}
        <div
          ref={dialRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          className="absolute rounded-full cursor-grab active:cursor-grabbing"
          style={{
            left: 50,
            top: 50,
            width: 180,
            height: 180,
            background: `radial-gradient(circle at 30% 25%, #4a4540 0%, #2a2520 35%, #0a0908 100%)`,
            boxShadow: `inset 0 2px 4px rgba(255,255,255,0.08), inset 0 -3px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.7)`,
            transform: `rotate(${angleDeg + 90}deg)`,
            transition: dragRef.current.active ? 'none' : 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
            touchAction: 'none',
          }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 180" style={{ pointerEvents: 'none' }}>
            <defs>
              <radialGradient id={`knurlGrad-${grinder.id}`} cx="50%" cy="50%">
                <stop offset="80%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
              </radialGradient>
            </defs>
            {knurlTicks.map((deg, i) => {
              const rad = ((deg - 90) * Math.PI) / 180;
              const r1 = 76;
              const r2 = 86;
              const x1 = 90 + r1 * Math.cos(rad);
              const y1 = 90 + r1 * Math.sin(rad);
              const x2 = 90 + r2 * Math.cos(rad);
              const y2 = 90 + r2 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 2 === 0 ? '#5a534c' : '#1a1715'}
                  strokeWidth="1"
                />
              );
            })}
            <circle cx="90" cy="90" r="86" fill={`url(#knurlGrad-${grinder.id})`} />

            {/* Indicator at 12 o'clock of cap */}
            <circle cx="90" cy="22" r="4" fill={grinder.accentColor}
              style={{ filter: `drop-shadow(0 0 4px ${grinder.accentColor})` }} />

            {/* Recessed center well */}
            <circle cx="90" cy="90" r="58" fill="#0a0908" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Center LCD readout — does NOT rotate */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center"
          style={{
            left: 90,
            top: 90,
            width: 100,
            height: 100,
            background: 'radial-gradient(circle at 50% 30%, #1a2520 0%, #0a1410 70%, #050807 100%)',
            boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 2px rgba(255,255,255,0.05)',
            border: '1px solid #000',
            pointerEvents: 'none',
          }}
        >
          <div
            className="text-[8px] tracking-[0.3em] uppercase mb-0.5"
            style={{ color: grinder.accentColor, opacity: 0.6, fontFamily: '"DM Mono", monospace' }}
          >
            Clicks
          </div>
          <div
            className="text-[44px] leading-none font-bold tabular-nums"
            style={{
              color: grinder.accentColor,
              fontFamily: '"DM Mono", monospace',
              textShadow: `0 0 12px ${grinder.accentColor}aa, 0 0 2px ${grinder.accentColor}`,
              letterSpacing: '0.02em',
            }}
          >
            {String(click).padStart(2, '0')}
          </div>
          <div
            className="text-[8px] tracking-[0.2em] mt-0.5"
            style={{ color: grinder.accentColor, opacity: 0.5, fontFamily: '"DM Mono", monospace' }}
          >
            ≈{Math.round(clickToMicrons(grinder, click))}µm
          </div>
        </div>

        {/* Source/mapped badge */}
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] tracking-[0.2em] uppercase"
          style={{
            background: isSource ? grinder.accentColor : '#2a2520',
            color: isSource ? '#0a0908' : '#6a625a',
            fontFamily: '"DM Mono", monospace',
            fontWeight: 600,
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {isSource ? 'Source' : 'Mapped'}
        </div>
      </div>

      {/* +/- buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => adjustClick(-1)}
          disabled={click <= grinder.minClick}
          className="w-12 h-12 rounded-lg flex items-center justify-center text-stone-200 text-xl font-light disabled:opacity-30 active:translate-y-0.5 transition-transform"
          style={{
            background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.8)',
            border: '1px solid #0a0908',
            fontFamily: '"DM Mono", monospace',
          }}
        >
          −
        </button>
        <button
          onClick={() => adjustClick(1)}
          disabled={click >= grinder.maxClick}
          className="w-12 h-12 rounded-lg flex items-center justify-center text-stone-200 text-xl font-light disabled:opacity-30 active:translate-y-0.5 transition-transform"
          style={{
            background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.8)',
            border: '1px solid #0a0908',
            fontFamily: '"DM Mono", monospace',
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ========== GRINDER PICKER ==========
function GrinderPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const options = Object.values(GRINDERS);
  const current = GRINDERS[value];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 rounded-md flex items-center justify-between text-stone-200 text-xs tracking-wider"
        style={{
          background: 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.5)',
          border: '1px solid #0a0908',
          fontFamily: '"DM Mono", monospace',
        }}
      >
        <span className="uppercase">{current.name}{current.model ? ` ${current.model}` : ''}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-1 rounded-md overflow-hidden z-20"
          style={{
            background: '#14110f',
            boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
            border: '1px solid #0a0908',
          }}
        >
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                onChange(opt.id);
                setOpen(false);
              }}
              className="w-full px-3 py-2 text-left text-stone-300 text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors"
              style={{ fontFamily: '"DM Mono", monospace' }}
            >
              {opt.name}{opt.model ? ` ${opt.model}` : ''}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ========== MAIN APP ==========
export default function App() {
  const audioRef = useRef(new ClickAudio());
  const [soundOn, setSoundOn] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [methodId, setMethodId] = useState('v60');
  const [leftId, setLeftId] = useState('commandante');
  const [rightId, setRightId] = useState('timemore_s3');
  const [leftClick, setLeftClick] = useState(20);
  const [rightClick, setRightClick] = useState(35);
  const [lockedSide, setLockedSide] = useState(null);
  const [activeSide, setActiveSide] = useState('left');
  const syncingRef = useRef(false);

  const leftGrinder = GRINDERS[leftId];
  const rightGrinder = GRINDERS[rightId];

  useEffect(() => {
    audioRef.current.enabled = soundOn;
  }, [soundOn]);

  const handleLeftGrinderChange = (newId) => {
    const oldGrinder = GRINDERS[leftId];
    const newGrinder = GRINDERS[newId];
    syncingRef.current = true;
    setLeftId(newId);
    // Remap the click via microns so the displayed grind stays equivalent
    const remapped = mapClicks(oldGrinder, newGrinder, leftClick);
    setLeftClick(remapped);
    if (lockedSide !== 'right') {
      setRightClick(mapClicks(newGrinder, GRINDERS[rightId], remapped));
    }
    setTimeout(() => { syncingRef.current = false; }, 50);
  };
  const handleRightGrinderChange = (newId) => {
    const oldGrinder = GRINDERS[rightId];
    const newGrinder = GRINDERS[newId];
    syncingRef.current = true;
    setRightId(newId);
    const remapped = mapClicks(oldGrinder, newGrinder, rightClick);
    setRightClick(remapped);
    if (lockedSide !== 'left') {
      setLeftClick(mapClicks(newGrinder, GRINDERS[leftId], remapped));
    }
    setTimeout(() => { syncingRef.current = false; }, 50);
  };

  const handleLeftChange = (newClick) => {
    if (syncingRef.current) return;
    setLeftClick(newClick);
    setActiveSide('left');
    if (lockedSide === 'left') return;
    syncingRef.current = true;
    setRightClick(mapClicks(leftGrinder, rightGrinder, newClick));
    setTimeout(() => { syncingRef.current = false; }, 50);
  };
  const handleRightChange = (newClick) => {
    if (syncingRef.current) return;
    setRightClick(newClick);
    setActiveSide('right');
    if (lockedSide === 'right') return;
    syncingRef.current = true;
    setLeftClick(mapClicks(rightGrinder, leftGrinder, newClick));
    setTimeout(() => { syncingRef.current = false; }, 50);
  };

  const handleMethodChange = (id) => {
    setMethodId(id);
    const lr = leftGrinder.methodRanges[id];
    const rr = rightGrinder.methodRanges[id];
    syncingRef.current = true;
    setLeftClick(Math.round((lr[0] + lr[1]) / 2));
    setRightClick(Math.round((rr[0] + rr[1]) / 2));
    setTimeout(() => { syncingRef.current = false; }, 50);
  };

  const saveSnapshot = () => {
    audioRef.current.init();
    const snap = {
      id: Date.now(),
      method: methodId,
      left: { id: leftId, click: leftClick, name: leftGrinder.name },
      right: { id: rightId, click: rightClick, name: rightGrinder.name },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setHistory((h) => [snap, ...h].slice(0, 8));
    audioRef.current.click('snap');
  };

  const restoreSnapshot = (snap) => {
    setMethodId(snap.method);
    setLeftId(snap.left.id);
    setRightId(snap.right.id);
    syncingRef.current = true;
    setLeftClick(snap.left.click);
    setRightClick(snap.right.click);
    setHistoryOpen(false);
    setTimeout(() => { syncingRef.current = false; }, 50);
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: `radial-gradient(ellipse at top, #1a1715 0%, #0a0807 60%, #050403 100%)`,
        fontFamily: '"Inter", -apple-system, sans-serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Bodoni+Moda:ital,wght@0,400;1,400;1,500;1,700&display=swap');
        body { background: #050403; }
        .grain-overlay::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          z-index: 100;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
      `}</style>
      <div className="grain-overlay" />

      {/* TITLE BAR */}
      <header
        className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between"
        style={{
          background: 'linear-gradient(180deg, #14110f 0%, #0a0807 100%)',
          borderBottom: '1px solid #000',
          boxShadow: '0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <button
          onClick={() => setHistoryOpen(!historyOpen)}
          className="w-9 h-9 rounded-md flex items-center justify-center text-stone-300 active:translate-y-0.5 transition-transform"
          style={{
            background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.6)',
            border: '1px solid #0a0908',
          }}
        >
          <History size={16} />
        </button>

        <div className="flex flex-col items-center">
          <div className="text-[10px] tracking-[0.4em] uppercase text-stone-500" style={{ fontFamily: '"DM Mono", monospace' }}>
            Hand Grinder
          </div>
          <div
            className="text-[18px] leading-none mt-0.5 text-stone-100"
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontStyle: 'italic',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            Calibrator
          </div>
        </div>

        <button
          onClick={() => {
            const next = !soundOn;
            setSoundOn(next);
            if (next) audioRef.current.init();
          }}
          className="w-9 h-9 rounded-md flex items-center justify-center text-stone-300 active:translate-y-0.5 transition-transform"
          style={{
            background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.6)',
            border: '1px solid #0a0908',
          }}
        >
          {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </header>

      {/* HISTORY DRAWER */}
      {historyOpen && (
        <div
          className="px-4 py-3 border-b"
          style={{
            background: '#0a0807',
            borderColor: '#000',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>
            Recent Settings
          </div>
          {history.length === 0 ? (
            <div className="text-xs text-stone-600 italic py-2" style={{ fontFamily: '"DM Mono", monospace' }}>
              No saved settings yet — tap "Save Snapshot" below.
            </div>
          ) : (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {history.map((h) => (
                <button
                  key={h.id}
                  onClick={() => restoreSnapshot(h)}
                  className="flex-shrink-0 px-3 py-2 rounded-md text-left"
                  style={{
                    background: 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
                    border: '1px solid #2a2520',
                    minWidth: 140,
                  }}
                >
                  <div className="text-[9px] tracking-widest uppercase text-stone-500" style={{ fontFamily: '"DM Mono", monospace' }}>
                    {h.time} · {h.method}
                  </div>
                  <div className="text-xs text-stone-200 mt-1 tabular-nums" style={{ fontFamily: '"DM Mono", monospace' }}>
                    {String(h.left.click).padStart(2, '0')} → {String(h.right.click).padStart(2, '0')}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BODY */}
      <main className="px-4 pt-6 pb-20 max-w-md mx-auto">
        {/* Brew method chips */}
        <div className="mb-6 -mx-1 overflow-x-auto">
          <div className="flex gap-1.5 px-1">
            {METHODS.map((m) => {
              const active = m.id === methodId;
              return (
                <button
                  key={m.id}
                  onClick={() => handleMethodChange(m.id)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all"
                  style={{
                    background: active
                      ? 'linear-gradient(180deg, #c89d6a 0%, #8a6a44 100%)'
                      : 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
                    color: active ? '#0a0807' : '#a8a098',
                    boxShadow: active
                      ? 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.6)'
                      : 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.5)',
                    border: active ? '1px solid #5a4530' : '1px solid #0a0908',
                    fontFamily: '"DM Mono", monospace',
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* LEFT GRINDER */}
        <div className="mb-3">
          <GrinderPicker value={leftId} onChange={handleLeftGrinderChange} />
        </div>
        <div className="mb-2 flex items-center justify-between">
          <button
            onClick={saveSnapshot}
            className="text-[9px] tracking-[0.2em] uppercase text-stone-500 hover:text-stone-300 transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            ◆ Save Snapshot
          </button>
          <button
            onClick={() => setLockedSide(lockedSide === 'left' ? null : 'left')}
            className="text-[9px] tracking-[0.2em] uppercase text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            {lockedSide === 'left' ? <Lock size={10} /> : <Unlock size={10} />}
            {lockedSide === 'left' ? 'Locked' : 'Lock'}
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <Dial
            grinder={leftGrinder}
            click={leftClick}
            setClick={handleLeftChange}
            methodId={methodId}
            audio={audioRef.current}
            isSource={activeSide === 'left'}
          />
        </div>

        {/* CONNECTOR */}
        <div className="flex flex-col items-center my-2 relative">
          <div className="w-px h-6" style={{ background: 'linear-gradient(180deg, transparent, #2a2520, transparent)' }} />
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 30% 25%, #2a2520 0%, #0a0807 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.06), 0 2px 6px rgba(0,0,0,0.7)',
              border: '1px solid #000',
            }}
          >
            <Coffee size={14} className="text-stone-500" />
          </div>
          <div className="w-px h-6" style={{ background: 'linear-gradient(180deg, transparent, #2a2520, transparent)' }} />
        </div>

        {/* RIGHT GRINDER */}
        <div className="mb-3">
          <GrinderPicker value={rightId} onChange={handleRightGrinderChange} />
        </div>
        <div className="mb-2 flex items-center justify-end">
          <button
            onClick={() => setLockedSide(lockedSide === 'right' ? null : 'right')}
            className="text-[9px] tracking-[0.2em] uppercase text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            {lockedSide === 'right' ? <Lock size={10} /> : <Unlock size={10} />}
            {lockedSide === 'right' ? 'Locked' : 'Lock'}
          </button>
        </div>
        <div className="flex justify-center">
          <Dial
            grinder={rightGrinder}
            click={rightClick}
            setClick={handleRightChange}
            methodId={methodId}
            audio={audioRef.current}
            isSource={activeSide === 'right'}
          />
        </div>

        {/* DISCLAIMER */}
        <div
          className="mt-16 mb-2 text-center text-[10px] leading-relaxed text-stone-600"
          style={{ fontFamily: '"DM Mono", monospace', letterSpacing: '0.05em' }}
        >
          Approximate · trust your taste
        </div>
      </main>
    </div>
  );
}
