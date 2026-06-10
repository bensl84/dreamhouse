# Dream House — Roadmap

The source of truth for where this project is going. Locked after passing a dual-AI review (product + technical), both ≥70%.

## North star
A free, ad-free, fully offline dress-up **+ dollhouse** sandbox that is unmistakably *hers* — looks rich, runs on her tablet with no internet, costs nothing, never nags. Original art only (not Barbie/Mattel). Built so she likes it *more* than the commercial games because it's about her.

## Audience & roles
- **Player:** a ~5-year-old, pre-reading girl, on a tablet.
- **Owner:** Ben (non-coder) — owns whether the outcome is right.
- **Engineer:** the AI agent — owns the build and proves it works.

## The art decision (the one that gates everything)
**HYBRID** — chosen after both AI reviewers rejected the all-AI "paper-doll" approach:

- **Character stays vector** (drawn in code). This keeps instant recolor, unlimited outfits, perfect consistency, and ~0KB — the core dress-up loop a 5-year-old actually loves. We improve its quality and add more outfits/hair.
- **Rooms use AI-generated backgrounds**, but styled as **rich *illustrated* scenes, not photoreal**, so the vector character sits in them naturally instead of looking pasted on. One locked style reference before generating all 9 rooms.
- All AI art is **baked once at build time** — the tablet never calls an AI model at runtime.

Why not the AI paper-doll: AI image tools can't reliably draw the same character twice or align separately-drawn clothing to her body, and it would have thrown away the instant-infinite recolor loop. (Technical review scored that approach 22%.)

## Pillars (all three, re-scoped to be finishable)
1. **Dress-up** — deeper vector wardrobe, instant recolor (the heart of the game).
2. **Decorate a room** — **tap-to-place** (tap an item, it snaps into a slot), *not* drag. Proven fun in one room before scaling.
3. **Pet & activities** — the existing care/play loops, extended.

## Roadmap (each phase ships something playable; each has a hard "done" + a test-with-her gate)
- **P0 — Launch (now).** Get the current working game onto GitHub Pages.
  - *Done =* a live link she can open and play on the tablet.
- **P1 — Rich worlds + better character.** AI illustrated backgrounds for the 9 rooms; polish the vector character; add a few more outfits/hairstyles.
  - *Done =* every room has a rich background, the character looks good on them (not pasted-on), and there are more outfits than today.
- **P2 — Decorate one room.** Tap-to-place furniture/décor in a single room.
  - *Done =* she can decorate that room, it saves, and she enjoys it in a real test. Scale to other rooms only if it passes.
- **P3 — Make it hers + show-off.** Light personalization (pick skin/hair, name the pet) + an **"I made this" snapshot** button that saves her dressed-up doll as a picture to show people.
  - *Done =* she can save a snapshot and show it; her choices persist.
- **P4 — Offline & polish.** Make it reliably work on her tablet with no internet (app-style install / offline cache), plus a performance pass.
  - *Done =* opens and plays fully offline on the actual target tablet; no lag.
- **Deferred to "someday":** seasonal/holiday content, extra mini-activities, recorded parent voice.

## Guardrails (the rules that keep it awesome)
- No fail states — no score, no timer, no way to lose.
- Voice-first for a pre-reader; big tap targets.
- Everything free and unlocked — no coins, no ads, no nags.
- Fully offline, no data collection, no external links.
- Original art only — never Barbie/Mattel names, characters, or art.
- **Stop-rule:** if a module isn't fun when she tests it, cut it. Finished and playable beats ambitious and broken.

## Engineering rules (from the technical review)
- All AI art baked at build time; zero AI calls at runtime.
- Asset budget: WebP, ≤~250KB per image, total payload ≤~8–10MB; size images to display dimensions (protects memory on a cheap tablet).
- Once image assets enter, add a service worker + manifest (offline install) — sequenced with P1/P4, not assumed.
- Commit the AI prompt prefix/seed + style reference so backgrounds are reproducible later.
- A build-time check enforces the asset budget so payload can't quietly creep.

## Open inputs needed from Ben
1. **The actual target tablet** (make/model). It drives the offline, image-format, and performance decisions — both reviewers flagged it.
2. Nothing else blocks P0.

## Review record
- v1 (all-AI paper-doll, all pillars, 5 phases): Product 38%, Technical 22% — **FAIL**.
- v2 (this plan): Product 74%, Technical 78% — **PASS** (≥70% on both).
