import { defineConfig } from 'astro/config';

// Served from GitHub Pages at /chalkmates-web/ until there's a domain. With a domain: set `site` to it,
// drop `base`, and add public/CNAME.
export default defineConfig({
  site: 'https://iamincontrolll.github.io',
  base: '/chalkmates-web/',
  build: { format: 'directory' },
});
