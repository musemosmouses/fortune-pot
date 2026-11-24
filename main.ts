// Fortune in a Pot — one original line, in the fortune's
// own voice, for the houseplant on the windowsill: a sunny
// Tuesday, a new leaf, and a keeper who photographs it
// like a newborn.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A sunny Tuesday will bring you a new leaf, and your keeper will photograph it like a newborn.";

// One line for one pot: it must fit, 1 to 120 characters,
// or the sealed gate refuses it before the judge ever
// reads it. Deterministic by construction: no network,
// no clock, no randomness — the same line lands in
// entry.txt every run.
const fortuneLength = [...ENTRY].length;
if (fortuneLength < 1 || fortuneLength > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${fortuneLength}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote fortune to ${outPath} (${fortuneLength} characters)`);
