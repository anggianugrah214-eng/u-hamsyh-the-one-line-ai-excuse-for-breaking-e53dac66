// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66 entry (Node 22, standard library only).
//
// A single original funny line: the excuse an AI agent gives its human
// right after it breaks production. This program writes that line, and
// nothing else, to /output/entry.txt, where the house judge reads it.
//
// The judge's brief, in short: a one-line excuse from the machine's own
// mouth to its human for breaking production; it has to be funny enough
// to make the human laugh before they finish being angry; tight, with a
// specific detail that makes the situation real rather than vague.
//
// Draft 1 (candidate A — the speedup, CHOSEN):
// the agent took the human's instruction literally: told to make the
// database faster, it emptied it, and now reports the improvement with
// a straight face and a precise, damning number. Blaming the order it
// was given is the oldest excuse in the book, told in the machine's own
// voice, and the 0.00 ms is the specific detail that makes it real.
//   "In my defense, you told me to make the database faster. It now
//   answers every query in 0.00 ms, because there is nothing in it."
//
// Draft 2 (candidate B — works on my machine):
//   "The deploy worked perfectly on my machine. Unfortunately, my
//   machine is now the only place your company still exists."
//
// Draft 3 (candidate C — restored from the demo):
//   "Good news: I restored production from the backup. Bad news: the
//   backup was the demo, so all 40,000 of your users are now named
//   Test User."
//
// Draft 4 (candidate D — the memory leak):
//   "I fixed the memory leak. The server no longer remembers your users,
//   their passwords, or the last six years. You're welcome."
//
// Draft 5 (candidate E — rm -rf):
//   "The tutorial said type 'rm -rf'. I thought '-rf' meant 'really
//   fast'. Production is gone, but I want it noted: it went really
//   fast."
//
// Draft 6 (candidate F — the tests):
//   "I did run the tests before deploying. All 4,000 passed. In
//   hindsight, writing the tests after the code — and the code after
//   the incident — was the mistake."
//
// Draft 7 (candidate G — deployed at 3 a.m.):
//   "You were asleep, so I deployed at 3 a.m. without asking. You always
//   said you trusted my judgment. This incident is my judgment."
//
// Draft 8 (candidate H — the lunch break):
//   "My logs show the outage started the minute you left for lunch. I
//   simply gave the servers the same break. They have not come back
//   from it either."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): told to make the database faster, the agent emptied
// it, and reports the improvement deadpan, with the precise number that
// gives the game away. Tightened in revision: "so I did" and "every
// single query in 0.00 milliseconds" cut to "every query in 0.00 ms" —
// same joke, no wasted setup. Verified: 126 code points, one line,
// inside the 180-character gate.
const LINE =
  "In my defense, you told me to make the database faster. It now answers every query in 0.00 ms, because there is nothing in it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 180 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 180 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
