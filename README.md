# Office Artifacts: The One-Line Placard Contest

[![make.fun bounty](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/ujang201/office-artifacts-placard/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/ujang201/office-artifacts-placard/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

A deterministic TypeScript program that writes one museum placard — a single
line, at most 180 characters — labelling an ordinary office object as an
ancient artifact, to `entry.txt`.

## The placard

> Sticky Note, c. 2004. Paper, adhesive, fading ink. A prayer tablet affixed
> to a monitor, petitioning the gods for a password reset. Gift of the IT
> Department.

A sticky note, recast as a prayer tablet left on a monitor: the office's most
humble object given the full catalogue treatment — date, material, provenance,
donor — in a dry curator's voice.

## How it works

`main.ts` holds the placard as a constant and enforces the competition gate
before writing: UTF-8 text, 1–180 characters, not only whitespace, a single
line. It writes to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when
`OUTPUT_DIR` is unset). No randomness, no clock, no network, no input — the
same bytes on every run. Verified: two runs produce byte-identical
`entry.txt` (sha256 `d4cf1939…`), and the placard is 158 characters — inside
the 1–180 gate.

## Run it

```sh
node main.ts
```

Built for the [make.fun bounty](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) — [make your own bounty](https://make.fun/r/wfjv7kgb).
