# Chalkmates web

The website for **Chalkmates**, the shared chalkboard that lands on each other's home screens.

**[iamincontrolll.github.io/chalkmates-web](https://iamincontrolll.github.io/chalkmates-web/)**

| Page | |
|---|---|
| [Home](https://iamincontrolll.github.io/chalkmates-web/) | Placeholder until the marketing site |
| [Privacy policy](https://iamincontrolll.github.io/chalkmates-web/privacy/) | What's stored, who sees it and how to delete it |
| [Delete account](https://iamincontrolll.github.io/chalkmates-web/delete-account/) | Delete your account in the app, or here by signing in |

## Tech stack

- [Astro](https://astro.build): static pages; the only script is the delete-account form
- Fonts self-hosted from [Fontsource](https://fontsource.org) (Nunito, Patrick Hand): no third-party requests
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Local development

Requires Node.js 24+.

```sh
npm install
cp .env.example .env   # then fill in the Supabase URL and publishable key
npm run dev
```

## The privacy policy

`src/content/privacy.ts` is a copy of `src/lib/privacy.ts` in the app repo, which is the source of truth (the app
shows the same text). With both repos side by side, `npm run sync:privacy` copies it over, and
`npm run sync:privacy -- --check` says whether they differ.

## Account deletion

The delete-account page signs in through Supabase Auth with email and password, then calls the
`delete_account` RPC: the same one the app's Profile → Delete account uses. It needs `PUBLIC_SUPABASE_URL` and
`PUBLIC_SUPABASE_KEY` (the publishable key, which is public by design) at build time.

## Deploying

One-time setup on GitHub: Settings → Pages → Source: **GitHub Actions**, and the repository variables
`PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_KEY` under Settings → Secrets and variables → Actions → Variables.
