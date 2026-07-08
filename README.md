# Agile Tools — Product Owner workspace

A single, brand-consistent workspace of self-contained tools I use to run product ownership at the University of Melbourne. Every tool follows the University's Visual Identity (Heritage Blue, Fraunces + Source Sans 3, flat modular layout) so roadmaps, reports and assessments all read as one family. Each tool is a standalone HTML file that opens offline in any browser — no install, no login, no server.

## Goal

Give a Product Owner one place to plan, prioritise and report — from long-range initiative planning down to a single sprint's outcomes — without leaving the browser or breaking brand consistency. Files are portable, printable to PDF, and versioned in Git.

## The workspace

**`Agile Tools.dc.html`** — the shell. A Heritage-Blue sidebar that launches each tool in-frame, remembers the last tool you opened, and offers an "open full screen" link. Appearance is tweakable (accent colour, sidebar width, subtitles). The offline bundle `Agile Tools (offline).html` packages all six tools into one file.

## The tools

- **Initiative Roadmap** — a visual timeline of product initiatives across quarters. For long-range planning and stakeholder alignment.
- **Prioritisation Template** — score and rank initiatives on a full weighted matrix. For rigorous, defensible prioritisation.
- **Quick Assessment** — rapidly plot initiatives on effort vs. value. For fast triage when the full matrix is overkill.
- **Sprint Review Report** — a printable summary of what was delivered, demoed and learned in a sprint. Imports sprint data from CSV; issue keys link straight to Jira (`unimelb.atlassian.net/browse/…`).
- **Sprint Kick-off Report** — set the sprint goal, scope and plan at the start of a sprint.
- **Ready & Done Checker** — run a story through the squad's Definition of Ready before it starts and Definition of Done before it closes. Verdict banner flags the gaps, notes capture what's missing, and the completed check prints to PDF for the ticket.

## Files

- `*.dc.html` — editable source components.
- `*(Standalone).html` / `*(offline).html` — self-contained builds for sharing and offline use.
- `_ds/` — the University of Melbourne design system (tokens + components) all tools are built on.
- `support.js` — shared runtime for the source components.
