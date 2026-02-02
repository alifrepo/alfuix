const fs = require("fs");
const path = require("path");
const sass = require("sass");

const srcDir = "scss";
const distDir = "dist/css";

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

fs.readdirSync(srcDir)
  .filter(file => file.endsWith(".scss"))
  .forEach(file => {
    const inputPath = path.join(srcDir, file);
    const outputPath = path.join(distDir, file.replace(".scss", ".min.css"));

    const result = sass.compile(inputPath, { style: "compressed" });
    fs.writeFileSync(outputPath, result.css, "utf8");
    console.log(`✅ Minified CSS: ${outputPath}`);
  });
