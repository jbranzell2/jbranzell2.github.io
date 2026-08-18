#!/usr/bin/env node
// Recursively converts every .png/.jpg/.jpeg under a directory to AVIF
// (same directory, same basename, quality 80) and reports the size
// savings. Source files in this repo are typically WebP data wearing a
// .png extension (a Figma export quirk) — sharp doesn't care, it sniffs
// the real content.
//
// Usage: node convert-to-avif.mjs <directory> [quality]
//
// Requires `sharp`, which is NOT a project dependency — install it
// temporarily first (`npm install --no-save sharp`) and remove it again
// after (`rm -rf node_modules && npm install`) once the conversion and
// import-path updates are done. See ../SKILL.md for the full workflow.

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const quality = Number(process.argv[3] ?? 80);

if (!dir) {
  console.error("Usage: node convert-to-avif.mjs <directory> [quality]");
  process.exit(1);
}

function walk(d) {
  let results = [];
  for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

const files = walk(dir);
if (files.length === 0) {
  console.log(`No .png/.jpg/.jpeg files found under ${dir}`);
  process.exit(0);
}

console.log(`Found ${files.length} image(s) to convert at quality ${quality}`);

let totalOrig = 0;
let totalNew = 0;
const failed = [];

for (const file of files) {
  const outFile = file.replace(/\.(png|jpe?g)$/i, ".avif");
  try {
    const origSize = fs.statSync(file).size;
    await sharp(file).avif({ quality }).toFile(outFile);
    const newSize = fs.statSync(outFile).size;
    totalOrig += origSize;
    totalNew += newSize;
    console.log(`  ${path.basename(file)}: ${(origSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`);
  } catch (e) {
    failed.push([file, String(e)]);
  }
}

console.log();
console.log(`Converted: ${files.length - failed.length}/${files.length}`);
console.log(
  `Total: ${(totalOrig / 1024 / 1024).toFixed(1)}MB -> ${(totalNew / 1024 / 1024).toFixed(1)}MB ` +
    `(${((100 * totalNew) / totalOrig).toFixed(1)}%)`,
);

if (failed.length) {
  console.log("\nFAILURES:");
  for (const [f, e] of failed) console.log(`  ${f}: ${e}`);
  process.exit(1);
}

console.log(
  "\nNext: update every import statement referencing these files from " +
    ".png/.jpg/.jpeg to .avif, then delete the original files once the " +
    "build is verified.",
);
