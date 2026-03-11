#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const projectName = process.argv[2];

if (!projectName) {
  console.error("Usage: create-mdx-docs <project-name>");
  process.exit(1);
}

const dest = path.resolve(process.cwd(), projectName);

if (fs.existsSync(dest)) {
  console.error(`Directory "${projectName}" already exists.`);
  process.exit(1);
}

const templateDir = new URL("../template", import.meta.url).pathname;

// Copy template
fs.cpSync(templateDir, dest, { recursive: true });

// Rename _gitignore -> .gitignore (npm strips .gitignore from published packages)
const gitignoreSrc = path.join(dest, "_gitignore");
if (fs.existsSync(gitignoreSrc)) {
  fs.renameSync(gitignoreSrc, path.join(dest, ".gitignore"));
}

// Set project name in package.json
const pkgPath = path.join(dest, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.name = projectName;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`\nCreated ${projectName}!\n`);
console.log("Next steps:\n");
console.log(`  cd ${projectName}`);
console.log("  npm install");
console.log("  npm run dev\n");
