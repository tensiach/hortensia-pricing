# Hortensia — Pricing Page

A static, mobile-first pricing page. No build step, no backend, no database.

## File structure

```
index.html      structure + SEO tags
style.css       all visual styling
script.js       your editable content (pricelist object) + rendering logic
assets/         put profile.jpg here
```

## Editing your content

Open **`script.js`** and edit only the `pricelist` object at the top of the
file. Everything below the `RENDERING LOGIC` comment can be left alone.

You can change:

- `brandName`, `tagline`, `avatar` — profile info. Add a photo at
  `assets/profile.jpg` (any image works, it's resized automatically). If no
  image is found, a placeholder icon is shown automatically — no broken
  image icon.
- `mainServices` / `additionalServices` — service names, durations, `idr`
  and `international` prices, and `detail` text. Keep the same object shape
  (e.g. `tiers: [...]` for multi-tier services like Vocal Mix) and the page
  will render it correctly.
- `orderUrl` — your WhatsApp link, e.g. `https://wa.me/6281234567890`
  (country code + number, no `+`, no spaces, no leading zero).
- `socials` — set a `url` to show a link, leave it as an empty string `""`
  to hide it. For Discord, use a profile link (not a server invite) so it
  opens a DM: `https://discord.com/users/YOUR_USER_ID`. To find your user
  ID: Discord app → Settings → Advanced → enable Developer Mode → right-click
  your own name → Copy User ID.
- `demoVideos` — an array of categories (e.g. Vocal Mix, Arrangement,
  Instrumental Recreation), each with its own `videos` list. Every category
  gets its own heading and its own horizontally scrollable row (swipe on
  mobile, scroll on desktop). Add, remove, or rename categories and videos
  freely — each video needs a `title` and a `url` (`watch`, `youtu.be`, or
  Shorts links all work). Leave a category's `videos` array empty to hide
  just that category, or leave `demoVideos` itself as `[]` to hide the
  whole Demo section.
- `footer` — footer text.

Save the file and refresh the page — no build step required.

## Previewing locally

Any static file server works, e.g. from this folder:

```
npx serve .
```

or just open `index.html` directly in a browser.

## Deploying to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into the
   Vercel dashboard).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (it's static — no build command, no output
   directory override needed).
4. Deploy. You'll get a URL like `https://your-project.vercel.app` — put
   that in your Instagram/TikTok bio.

Updating later: edit `script.js`, commit, push — Vercel redeploys
automatically. (Netlify and GitHub Pages work the same way, since this is
plain static HTML/CSS/JS.)
