import fs from "fs";
import path from "path";

function replaceInFile(file) {
  let content = fs.readFileSync(file, "utf8");
  if (content.includes(".mts")) {
    content = content.replace(/\.mts/g, ".mjs");
    fs.writeFileSync(file, content, "utf8");
    console.log("✔ fixed imports in", file);
  }
}

function walkDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkDir(filepath);
    } else if (filepath.endsWith(".mjs")) {
      replaceInFile(filepath);
    }
  }
}

walkDir("./dist");
