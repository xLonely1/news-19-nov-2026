// News-image entry for 19 November 2026 (Node 22, standard library only):
// the front-page image beside this file is copied to /output/entry.png.
// The image is drawn programmatically (Python PIL, DejaVu fonts): masthead with
// the date, a lead panel on the GTA VI global rollout, and five panels — the
// ICJ Rohingya ruling, Voyager 1's light-day, the APEC trilateral in Shenzhen,
// Australia's sanctions on Israeli settlements, and the Berlin Ukraine meeting.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
