import fs from "fs";
import path from "path";

const srcDir = path.resolve("src");

function fixImportsRecursively(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      fixImportsRecursively(fullPath); // duyệt thư mục con
    } else if (file.isFile() && (file.name.endsWith(".ts") || file.name.endsWith(".mts") || file.name.endsWith(".js"))) {
      let content = fs.readFileSync(fullPath, "utf-8");

      // thay ".mts" thành ".mjs"
      let updated = content.replace(/(\.mts)(["'])/g, ".mjs$2");

      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, "utf-8");
        console.log(`🔧 Fixed imports in: ${fullPath}`);
      }
    }
  }
}

fixImportsRecursively(srcDir);
console.log("✨ Done! All imports changed from .mts → .mjs in src/");
