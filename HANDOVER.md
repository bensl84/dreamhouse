# Dream House — Handover

A single document to (a) let Ben critique the project's direction, and (b) let any engineer or AI agent pick up the build with zero prior context. Pair this with `ROADMAP.md` (the plan) and `index.html` (the game).

---

## 1. What this is

A free, ad-free, fully offline **dress-up + dollhouse sandbox game** built for one ~5-year-old, pre-reading girl, played on a tablet. Original art and characters — **not** affiliated with Barbie/Mattel. The design DNA is borrowed from Barbie Dreamhouse Adventures and Toca Boca: open-ended play, no scores, no timers, no way to lose.

**Why it exists:** a personal, everything-unlocked, no-ads, no-data alternative to the freemium kids' apps — and something she'll love *more* because it's about her.

**Roles:**
- **Owner:** Ben (non-coder). Owns whether the outcome is right.
- **Engineer:** AI agent. Owns the build and proves it works (tests, headless runs).

---

## 2. Current status (what's built and working)

A complete, playable game exists as a single file: **`index.html`** (~85 KB).

- **9 rooms:** Dress Up, Beauty Salon, Bake a Cake, Pet Care, Bedroom (day/night), Bubble Bath, Garden, Pool, Party.
- **Dress-up:** skin, hairstyle, hair color, outfit, fabric color, shoes, accessories — all recolor instantly.
- **Pet:** puppy or kitty, with feed/play/bath and a happiness meter.
- **Voice narration:** greets the player by name, says colors out loud, counts cake toppings, reacts to taps (uses the device's built-in speech — offline, no audio files).
- **Sound effects** (Web Audio), **auto-save/resume** (browser storage), one-button mute, everything unlocked.
- **Validated:** balanced syntax + a headless-DOM run clicking through all rooms and all dress-up options returns zero errors.

**Not done yet:**
- Not yet uploaded to GitHub / GitHub Pages (this is the immediate next step, "P0").
- Current art is **100% hand-drawn vector** (rooms included). The planned AI illustrated backgrounds are **not yet built**.
- Board-recommended fixes (durable save, guarded reset, snapshot gallery) are **not yet built**.

---

## 3. Key decisions & why (the part to critique)

**Art direction = HYBRID.** Character stays vector (drawn in code) so dress-up keeps instant recolor and unlimited outfits; rooms get AI-generated **illustrated** backgrounds (not photoreal, so the vector character doesn't look pasted on). All AI art baked once at build time — the tablet never calls AI at runtime.

- *Rejected:* an all-AI "paper-doll" character. AI image tools can't reliably draw the same character twice or align separate clothing layers to her body, and it would have killed the instant-recolor loop she loves.

**Scope = all three pillars, re-sequenced to be finishable:** dress-up (core), tap-to-place room decorating (new), pet/activities (extend).

**Decorate = tap-to-place, not drag** — easier for little fingers; prove it fun in one room before scaling.

**Recorded parent voice = deferred.** The built-in device voice stays for now.

**Guardrails (non-negotiable):** no fail states; voice-first; big tap targets; everything free/unlocked; fully offline; no data collection; original art only; stop-rule = cut any module that isn't fun when she tests it.

---

## 4. How it's built (architecture)

- **One self-contained `index.html`** — no frameworks, no build step, no server, no dependencies.
- **Art:** inline SVG drawn in code, which is why it recolors instantly and weighs ~0 KB.
- **Sound:** Web Audio API. **Voice:** Web Speech API. Both offline.
- **Save:** `localStorage` (with a deep-merge so old saves don't break on updates).
- **Hosting:** static — GitHub Pages serves the single file directly.

**When AI backgrounds are added (P1+):** the single-file model gives way to an `/assets` folder of small WebP images plus a service worker + manifest (so "offline" keeps working). Hard budget: ≤~250 KB/image, ≤~8–10 MB total.

---

## 5. The plan (summary — full detail in ROADMAP.md)

Each phase ships something playable and has a hard "done" + a test-with-her gate.

- **P0 — Launch (now):** get the current game live on GitHub Pages.
- **P1 — Rich worlds + better character:** AI illustrated room backgrounds; polish the vector character; more outfits.
- **P2 — Decorate one room:** tap-to-place; test; scale only if fun.
- **P3 — Make it hers + show-off:** pick skin/hair, name the pet, "I made this" snapshot.
- **P4 — Offline & polish:** reliable offline on the actual tablet; performance pass.
- **Deferred:** seasonal content, extra activities, recorded parent voice.

---

## 6. Review record (how the plan was vetted)

- **Dual-AI review, v1** (all-AI paper-doll, all pillars): Product **38%**, Technical **22%** → **FAIL**.
- **Dual-AI review, v2** (this hybrid plan): Product **74%**, Technical **78%** → **PASS** (≥70% both).
- **Elite product-board gate:** Product Readiness **8/10** (planned), **PASS**. Critique was about elevating *good → magical*, not fixing anything broken.

**Board fixes to fold in (not yet in the plan/code):**
1. **Durable save + guarded reset** — browser storage can be cleared, wiping her world; the reset button is reachable by a 5-year-old. Add a sturdier save/export and a parent-gated reset.
2. **Snapshot "fridge gallery"** — let her save dressed-up looks into a gallery she can flip through and show off. Turns a button into a reason to return.
3. **Promote personalization** — "it's her world" is the one thing no studio can copy; make it the soul, not a late trim.
4. **Lock one illustrated art style** before generating all 9 room backgrounds (consistency).

---

## 7. Open inputs needed from Ben

1. **The actual target tablet** (make/model, or "newer iPad" vs "cheap Amazon Fire"). Drives offline/image/performance choices. Doesn't block P0.
2. Confirmation to fold the four board fixes into the roadmap.

---

## 8. Repo contents

- `index.html` — the game (this is the homepage GitHub Pages serves).
- `ROADMAP.md` — the locked plan / source of truth.
- `HANDOVER.md` — this document.
- `README.md` — what it is + how to run/host.
- `LICENSE` — MIT.
- `previews/` — art-direction experiments (`glam-preview.html`, `real-preview.html`); reference only, not part of the game.

---

## 9. Run it / ship it

- **Run:** open `index.html` in any browser.
- **Ship (P0):** push this folder to a **public** GitHub repo → Settings → Pages → Deploy from branch (`main` / root) → get a `https://USERNAME.github.io/dreamhouse/` link → open on the tablet, add to home screen.

---

## 10. Known risks

- AI background style drift across 9 rooms (mitigate: lock one style reference first).
- Tone clash — flat vector character on a rich background can read "pasted on" (mitigate: illustrated, not photoreal backgrounds + character polish in P1).
- Save loss if browser storage clears (mitigate: board fix #1).
- Offline must be tested on the **real** tablet — headless tests won't catch service-worker, image-decode, or touch behavior.

---

## 11. Immediate next action

**P0 — get it live on GitHub Pages.** Everything else builds on a known-good, already-playable base.
