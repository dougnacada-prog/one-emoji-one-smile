// One Emoji, One Smile — make.fun entry.
// The program writes exactly one emoji to /output/entry.txt:
// the single emoji most likely to make a stranger smile.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// 🌞 (sun with face): literal warmth plus a friendly face, readable
// by any stranger at a glance — a deliberate pick, not the default
// smiley, with no intimacy, irony or flirtation.
const EMOJI = "🌞";

// Gate guard: exactly one emoji, 1–8 characters, not only whitespace.
// Fail loudly instead of writing an entry the gate would refuse.
if ([...EMOJI].length !== 1 || !/\S/.test(EMOJI)) {
  throw new Error("entry must be exactly one emoji");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, EMOJI);
