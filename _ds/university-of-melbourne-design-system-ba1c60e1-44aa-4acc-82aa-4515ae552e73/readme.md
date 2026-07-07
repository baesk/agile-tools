# University of Melbourne — Design System

A personal design guide for an **Agile Product Owner** at the University of Melbourne, themed to the University's official **Visual Identity** so that every tool, slide, spreadsheet and document I generate reads as one consistent family.

This is **not** an official University asset. It is a working design system that *follows* the University's published Visual Identity Guidelines, built so design agents and Office templates produce brand-consistent output.

---

## Source of truth

- **`uploads/UMEL0023_Guideline_V2-LR.pdf`** — *University of Melbourne Visual Identity Guidelines, Version 2 (July 2025)*. Every colour, type, logo and layout rule here is derived from this 60-page document. Page references appear in the token files.
- Official artwork (the crest/logo, photography library) lives on the University **Brand Hub** and **Creative Services Studio Hub** and must be obtained from the Brand team — it is **not** reproduced here (see Iconography → Logo).

The brand exists to "memorably position the University with our audiences" through a *unique modular system that stretches from classic design to bespoke expression.* Its most distinctive, always-on cues are: the **Vertical Housed logo**, **Traditional Heritage Blue**, and the **Fraunces** typeface.

---

## Content fundamentals

How copy is written across University communications.

**Three tone-of-voice traits** (each has one definition; application flexes by audience):
- **Cleverly Incisive** — *every word earns its place.* Cut ambiguity and repetition; distil complexity to its simplest form without losing meaning.
- **Refreshingly Relatable** — *build a genuine connection.* Fresh, engaging, never a "big university talking at the world." Avoid university clichés.
- **Effortlessly Intelligent** — *make academia accessible.* Creative thinking expressed naturally; one idea flows into the next.

**Casing & grammar**
- **Headings: sentence case.** Always. ("The power of being different", not Title Case.)
- **Subheadings: title case** — unless sitting directly under a heading, where sentence case is used.
- **Paragraph headings: title case, never italic.**
- **Italics: sparingly** — to highlight a single word or short phrase in a heading, or to mark URLs.
- Writing is concise and confident. Short headings. "We"/"our" for the institution; "you"/"your" to address the reader directly.
- **No emoji.** The brand is typographic and restrained; emoji never appear in University communications.
- **Descriptive links** for accessibility — name the destination ("Read the enrolment guide"), never "click here".
- **CRICOS 00116K** must appear on any material using the University name/logo (≥6pt).

**Voice in practice (examples from the guideline):**
- *"Chart a unique path with Australia's number one university."*
- *"It's the power of being different."*
- *"Bring your boldest ideas to life."*
- *"Unlock a better tomorrow."*

For my product-owner work, this translates to: plain, outcome-led writing. "What we shipped this sprint", not "Sprint accomplishments overview". State the goal, the result, the next step.

---

## Visual foundations

**Colour**
- **Traditional Heritage Blue `#000F46` is the hero colour and must dominate every execution.** It is an always-on brand code. Deep, prestigious, grounding.
- A **secondary palette of seven "Colours of Country"** (River Red Gum, Black Sheoak, Yam Daisy, Laughing Kookaburra, Possum, Mt William Greenstone, Magpie) — inspired by the flora and fauna of Billibellary's Walk at the Parkville campus — plus black and white. Each has a **darker shade** for accessibility and depth.
- **Pairing rule:** pick **one** secondary colour (and its shade) per execution. A **tonal** approach is always preferred over high-contrast pairings. Less is more.
- **Colour weightings** dial Heritage Blue up: ~90/10 blue-to-secondary for prospective students, down to ~50/50 for staff/current students — but blue *always* stays dominant.
- **Flat colour only.** No gradients, no highlights, no shadows on brand colour. This is the single most important visual rule.

**Typography**
- **Fraunces** (modern decorative serif) — *master headings only*, at large sizes (digital ≥30pt). Light weights are sophisticated; heavier weights are playful and aid small-size legibility. Web variable settings: weight 300–600, **Softness 50, Wonk 0**, optical size 72. Tracking −10, leading 100–110%. **Never** embellish with shadows or outlines.
- **Source Sans 3** — subheadings and all body copy; every weight, the versatile workhorse.
- **Office / web-safe fallbacks:** **Georgia** replaces Fraunces, **Arial** replaces both, in PowerPoint / Word / Excel (Fraunces & Source Sans 3 are *not recommended* in Office due to cross-platform corruption).
- Type colour is **white or Heritage Blue**; headings and URLs may take a secondary colour.

**Layout — the modular grid**
- A **Fibonacci-inspired grid of square modules** (1, 1, 2, 3, 5…) that echoes the square logo. Modules hold logo, colour, image, type, or type-over-colour.
- The logo always sits in a **"1" module** at a corner / outer margin.
- **Space communicates confidence — don't fill every box.** Empty modules are encouraged.
- Outer margin = 5% of the smallest side; inner margins always applied. The leftover non-square area in some formats is the **"plus module"** (Heritage Blue, imagery, or type-over-blue only).
- Communications are **typography-led or imagery-led** depending on goal.

**Backgrounds & surfaces**
- Solid flat colour blocks (Heritage Blue or one secondary). No gradients, textures or patterns.
- Imagery is full-frame within its module — authentic, warm documentary photography of people, place (architecture, campus, facilities) and objects. Choose palette colours that *complement colours found in the image*. (No photography ships here — source from the Brand Hub.)
- Digital UI surfaces in this system use a warm off-white **Paper `#F7F7F4`** and a faint **Sunken `#F2F3F7`** as alternatives to pure white.

**Shape, border, elevation**
- **Square is the default.** Corners are sharp (0px) or barely rounded (2–4px) for digital affordances only. Pills are reserved for status chips.
- Structure is carried by **hairline borders (`#DDDEE6`) and generous whitespace**, not shadows — the print brand is wholly flat.
- A faint **card shadow** exists for on-screen UI only and is opt-in. Never simulate it in print/Office output.
- Signature device: the **Heritage Blue rule** — a 2–3px blue line as a top accent on cards or a footer divider.

**Motion & states** (digital extension — the brand book is print-led, so these are conservative)
- Restrained, confident **fades** with a quick ease (`cubic-bezier(0.2,0,0.1,1)`, ~200ms). No bounce, no spring, no decorative looping.
- **Hover:** primary buttons darken toward Kookaburra shade; ghost/secondary take a faint Paper-blue wash. Links underline.
- **Press / active:** colour deepens; no scale/shrink tricks.
- **Focus:** a soft Heritage-Blue ring (`0 0 0 3px rgba(0,15,70,0.10)`) — always visible for accessibility.
- Transparency/blur are used sparingly; the brand favours solid flat colour over glass.

---

## Iconography

- The University's official set is **"Supporting symbols and icons"** — simple, single-weight line icons that sit within the modular grid. The master set is distributed via the Brand Hub and is **not included here**.
- **Substitution:** this system uses **[Lucide](https://lucide.dev)** (CDN) as the closest open match — a clean, consistent single-stroke line set. Load `https://unpkg.com/lucide@latest` and use `data-lucide="…"`. ⚠️ *Flagged substitution — replace with the official University icon set when available.*
- Icons are **monoline, Heritage Blue or white**, used flat with no fill, no drop-shadow. Keep them sparing — they support content, they don't decorate it.
- **No emoji.** **No unicode-glyph icons** as a system. Status is communicated with the `Badge` component (colour + word), not symbols alone.
- **Logo:** the **Vertical Housed logo** (crest + motto + wordmark in a Heritage Blue square) is the primary mark. ⚠️ Master logo artwork must **never be redrawn** — the `Logo` component here is a brand-safe **placeholder** at the correct proportions; drop official crest artwork into its `crestSrc` slot.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (consumers link this). `@import` manifest only.
- `tokens/fonts.css` — Fraunces + Source Sans 3 (Google Fonts).
- `tokens/colors.css` — primary, secondary Colours of Country + shades, neutrals, semantic aliases, status colours.
- `tokens/typography.css` — families, scale, weights, leading; plus `.um-*` helper classes.
- `tokens/spacing.css` — spacing scale, modular-grid metrics, radii, borders, elevation, motion.

**Components** (`_ds_bundle.js` → `window.UniversityOfMelbourneDesignSystem_ba1c60`)
- `components/core/` — **Button**, **Card**
- `components/forms/` — **Input**
- `components/feedback/` — **Badge** (status chips)
- `components/brand/` — **Identifier** (faculty/entity lockup), **Logo** (placeholder)

**Specimen cards** — `guidelines/*.card.html` (Colors, Type, Spacing) render in the Design System tab.

**Slides** — `slides/*.html` — branded 16:9 slide types: title, section divider, content, metrics, quote, roadmap.

**UI kit** — `ui_kits/documents/` — interactive Product-Owner workspace: a Word-style **Sprint Report** and an Excel-style **Backlog Tracker**.

**Skill** — `SKILL.md` — makes this folder usable as a downloadable Claude Agent Skill.

---

## Caveats
- **No official artwork.** The crest/logo and all photography are placeholders or omitted — obtain real assets from the University Brand team.
- **Fonts via Google Fonts CDN**, not bundled binaries — works for consumers but ships no local font files.
- **Icons substituted** with Lucide pending the official set.
