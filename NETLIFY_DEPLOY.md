# Portfolio Pro - Netlify Deployment Guide

## Quick Deploy Steps

1. Push this project to a GitHub/GitLab repository.
2. Log in to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your repository.
4. Netlify will auto-detect the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. **Set Environment Variables** in Netlify: `Site → Site settings → Environment variables`

## Required Environment Variables

Set these in Netlify's dashboard (NOT in committed files):

| Variable | Description |
|----------|-------------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key for the chatbot |
| `NEXT_PUBLIC_SITE_URL` | Your Netlify URL, e.g. `https://yoursite.netlify.app` |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key (for auth) |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

> [!IMPORTANT]
> `NEXT_PUBLIC_SITE_URL` is required for the sitemap and SEO metadata to work correctly.

## Notes

- The AI chatbot (`/ai`) uses the Google Generative AI API via a Netlify Edge Function. Make sure `GOOGLE_GENERATIVE_AI_API_KEY` is set.
- Firebase is used for the login/auth feature. If you don't need auth, the rest of the site works without Firebase keys.
- The `@netlify/plugin-nextjs` plugin handles SSR, API routes, and edge functions automatically.
