# Uge Destiny Portfolio — Vercel Ready

A single-page Next.js portfolio with light/dark mode, GSAP + ScrollTrigger motion, Lenis smooth scrolling, responsive layouts, a server-side contact endpoint and a Resend email integration.

## Run locally

You only need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The full site runs without environment variables. To receive messages from the contact form, copy `.env.example` to `.env.local`, add a Resend API key, and restart the development server:

```bash
cp .env.example .env.local
```

`CONTACT_EMAIL` is already set to `ugedestiny6@gmail.com`. Resend's onboarding sender is suitable for initial testing; use a sender on your verified domain when you are ready for production.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_EMAIL`, and `CONTACT_FROM_EMAIL` in Vercel → Project Settings → Environment Variables.
4. Deploy. Vercel automatically detects Next.js and uses `npm run build`.

No custom output directory, build command or server configuration is required.

## Important folders

- `app/page.tsx` — page content, visual systems and motion logic
- `app/globals.css` — responsive design, themes and animation styling
- `app/api/contact/route.ts` — validated backend contact endpoint
- `public/uge-destiny.webp` — optimized portrait asset

## Replace project media later

The Gleenc and Tekagon visual areas are intentionally designed as high-fidelity placeholders. Replace their inner mockup components in `app/page.tsx` with your own optimized images or videos while keeping the surrounding `project-visual-wrap` structure.
