// Copies the privacy policy from the app repo (../chalkmates/src/lib/privacy.ts) into src/content/privacy.ts.
// The app's file is the source of truth; run this whenever it changes, then commit here.
// With --check, only reports whether the two differ (exit 1 if they do).
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(here, '..', 'chalkmates', 'src', 'lib', 'privacy.ts');
const target = join(here, 'src', 'content', 'privacy.ts');

if (!existsSync(source)) {
  console.error(`The app repo isn't next to this one: ${source} not found.`);
  process.exit(1);
}
const app = readFileSync(source, 'utf8');
const site = readFileSync(target, 'utf8');
if (app === site) {
  console.log('privacy.ts already matches the app.');
} else if (process.argv.includes('--check')) {
  console.error('src/content/privacy.ts differs from the app’s. Run npm run sync:privacy.');
  process.exit(1);
} else {
  writeFileSync(target, app);
  console.log('Copied the app’s privacy.ts. Check the pages and commit it.');
}
