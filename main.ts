// Describe Your Ex in One Word — make.fun entry.
// The entry is a single word: a verdict on an ex, not an insult.
// It names the habit of keeping someone around only until the real
// thing shows up — the seat-warmer of a relationship, summed up in
// one word that lands at a glance.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Placeholder";
const MAX_CHARS = 111;

function main(): void {
  // Exactly one word, spelled correctly, no punctuation tricks.
  const words = WORD.trim().split(/\s+/).filter(Boolean);
  if (words.length !== 1) {
    throw new Error(`Entry must be exactly one word, got ${words.length}`);
  }
  const chars = [...WORD].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  // Deterministic output: the same word, byte for byte, every run.
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
  console.log(`Wrote ${chars}-character entry to ${join(outDir, "entry.txt")}`);
}

main();
