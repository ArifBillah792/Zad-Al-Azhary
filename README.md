# Zad Al-Azhari landing page

Astro + Tailwind CSS. Four languages: `/ar/` (default, RTL), `/en/`, `/bn/`, `/ms/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in /dist
```

## Where to change things

| What | File |
|---|---|
| Prices, WhatsApp, Telegram, payment numbers, delivery date and areas | `src/config/site.ts` |
| All text, per language | `src/i18n/ar.ts`, `en.ts`, `bn.ts`, `ms.ts` |
| Colors and fonts | `src/styles/global.css` (the `@theme` block) |
| Logo | `src/components/Logo.astro` (instructions inside) |
| Sample page photos | `public/samples/1.jpg` … `4.jpg` (they appear automatically) |
| Share image for WhatsApp/Facebook previews | `public/og.jpg` (1200×630) |
| Your domain | `site` in `astro.config.mjs` |

## How ordering works

The form builds a message in the visitor's language with their notes, details and total.

- **WhatsApp** opens your chat with the message pre-filled.
- **Telegram**: set `telegramUsername` in `site.ts` and the message opens pre-filled in your personal chat. While it is empty, the message is copied and your group invite link opens, so the student pastes it.

## Sections

Header, Hero (the six notes on a shelf), Subjects picker, What's inside, Group offer, Sample pages, Order form, Delivery/payment info, FAQ, Footer. Each is a file in `src/components/`.

## Deploy

Push to GitHub, then connect the repo on Cloudflare Pages, Netlify or Vercel. Build command `npm run build`, output folder `dist`.
