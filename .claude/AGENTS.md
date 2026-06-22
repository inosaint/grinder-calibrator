# AGENTS.md

Cross-tool agent guidance for this repo.

For project context, architecture, conventions, and the rules around editing
`index.html` and the grinder data, read **[CLAUDE.md](./CLAUDE.md)**.

For the visual design language and what not to drift away from, read
**[DESIGN.md](./DESIGN.md)**.

## Verification

Do not run browser/UI verification; I will verify UI manually. Use build/unit
checks only unless explicitly requested.

For workflow when adding a new grinder, see the subagent definitions in
[`.claude/agents/`](./.claude/agents/) — `grinder-researcher` (research +
README) hands off to `grinder-implementer` (wires the entry into
`index.html`).
