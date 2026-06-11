# Dream House

A free, ad-free, offline dress-up and play sandbox built for one specific kid — but anyone can play it. No accounts, no purchases, no data collection, no internet required. It's a single HTML file that runs in any browser, phone, or tablet.

## Play it

Open `index.html` in any web browser. That's it.

To play on a tablet with no setup, host it for free on GitHub Pages (see below) and open the link.

## What's inside

Nine rooms, all unlocked:

- **Dress Up** — change skin, hairstyle, hair color, outfit, fabric color, shoes, and accessories
- **Beauty Salon** — lip color and a magic glow
- **Bake a Cake** — add ingredients, mix, bake, frost, and decorate
- **Pet Care** — feed, play with, and bathe a puppy or kitty (with a happiness meter)
- **Bedroom** — day/night toggle, wallpaper, and tuck-in
- **Bubble Bath** — pop bubbles and squeak the duck
- **Garden** — grow flowers and chase butterflies
- **Pool** — splash and float
- **Party** — balloons, confetti, and a disco dance

### Built for young, pre-reading kids

- **Voice narration** — greets the player by name, says colors out loud ("Pink!"), counts cake toppings ("one, two, three!"), and reacts to taps. Uses the device's built-in speech, so it works offline with no audio files.
- **No fail states** — no score, no timer, no way to lose. Pure open-ended play.
- **Big tap targets**, instant visual rewards, and a one-button mute.
- **Auto-saves** progress in the browser, so it remembers the player's name, pet, and outfits.

## How it's built

Everything is one self-contained `index.html` file:

- All artwork is drawn in code (SVG) — no image files, which is why it recolors instantly and works offline.
- Sound effects are generated with the Web Audio API. Voice uses the Web Speech API.
- No frameworks, no build step, no dependencies, no server.

## Host it free with a live link (GitHub Pages)

1. Push this folder to a **public** GitHub repository.
2. In the repo: **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and Save.
4. Wait about a minute. GitHub gives you a link like `https://YOURNAME.github.io/dreamhouse/`.
5. Open that link on the tablet and bookmark it to the home screen.

## Previews

The `previews/` folder holds art-direction experiments (`glam-preview.html`, `real-preview.html`) used while designing the characters. They're not part of the game — just reference.

## A note on originality

All characters and art in this project are original and drawn from scratch. It is **not** affiliated with, and does not use the name, characters, or artwork of, Barbie, Mattel, or any other brand.

## License

MIT — see `LICENSE`.

## Version
v3 — THE DOLLHOUSE: mansion cross-section home screen (tap rooms to enter; elevator, doorbell, mailbox; day/night follows the bedroom; her pet in the yard), installable-offline (cache dreamhouse-v3).
v2 — fridge photo gallery, grown-up-gated reset, pet naming, new outfits/hair/wings, bedroom stickers, richer animated rooms.
