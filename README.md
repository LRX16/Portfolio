# Temple Archive Portfolio

A customizable Next.js portfolio with a mysterious ancient temple, sacred archive, and mountain journey theme. It is built for Vercel and keeps portfolio content in one central file.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Edit your content

Almost everything you need to change lives in:

```text
src/data/portfolio.ts
```

Update the placeholder values for your name, headline, about text, projects, research ideas, skills, honors, experience, timeline, links, and SEO metadata. You can add or remove items from the arrays without editing the page components.

The generated hero image is stored at:

```text
public/images/temple-archive-hero.png
```

Replace it with another image if you want a different atmosphere, then update `hero.image` and `metadata.ogImage` in `src/data/portfolio.ts` if the filename changes.

## Contact form

The contact form validates name, email, and message, and includes a hidden honeypot field for spam prevention.

Email delivery is optional. Without email settings, the API validates the message and returns a clear "not configured yet" response.

To enable email delivery through Resend, copy `.env.example` to `.env.local` and set:

```text
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=your.email@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

Do not commit `.env.local`.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the default Next.js settings.
4. Add the optional contact form environment variables in Vercel if you want live email delivery.
5. Deploy.

## Project structure

```text
src/app/page.tsx          Main portfolio page
src/app/api/contact       Contact form API route
src/app/globals.css       Theme, layout, animation, and responsive styles
src/data/portfolio.ts     Editable portfolio content
public/images             Visual assets
```
