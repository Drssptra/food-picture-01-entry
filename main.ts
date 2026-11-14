// food-picture-01 entry (Node 22, standard library only).
//
// The picture is the entry.png beside this file: a photorealistic
// cheeseburger — glossy toasted sesame brioche, melted cheddar dripping
// down a seared beef patty, warm golden light on dark slate. The program
// copies it to /output/entry.png, exactly as the kit's starter does.
//
// The file's bytes are a JPEG (told apart by its first bytes, as the
// rules allow) while the name stays entry.png. No network, no randomness:
// every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The grader hands us a writable /output, but never assume it exists:
// creating it keeps a fresh local run (MAKEFUN_OUTPUT_DIR=out) from
// failing on a missing directory, and changes nothing about the bytes.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
