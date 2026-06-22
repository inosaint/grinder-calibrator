# CLAUDE.md

Project guidance for Claude Code lives in [`.claude/CLAUDE.md`](.claude/CLAUDE.md).

This file is a pointer so Claude Code (which auto-loads `CLAUDE.md` from the
repo root) finds the real docs. Contributors looking to understand the
project's Claude/agent setup should browse [`.claude/`](.claude/) — it
contains this guidance, the cross-tool [`AGENTS.md`](.claude/AGENTS.md), and
the subagent definitions in [`.claude/agents/`](.claude/agents/).

## Verification

Do not run browser/UI verification; I will verify UI manually. Use build/unit
checks only unless explicitly requested.
