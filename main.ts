// Office Artifacts: The One-Line Placard Contest — deterministic one-liner entry.
//
// The program writes exactly one museum placard — a single line, at most 180
// characters, labelling an ordinary office object as an ancient artifact —
// to $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1-180 characters, not only
// whitespace, a single line, no trailing newline. If the placard ever failed
// the gate the program would refuse to write anything instead of writing an
// invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD =
  "Sticky Note, c. 2004. Paper, adhesive, fading ink. A prayer tablet affixed to a monitor, petitioning the gods for a password reset. Gift of the IT Department.";

function isValid(text: string): boolean {
  if (text.length < 1 || text.length > 180) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

function main(): void {
  if (!isValid(PLACARD)) {
    throw new Error(
      `placard fails the gate (${PLACARD.length} chars): refusing to write`,
    );
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PLACARD, "utf8");
}

main();
