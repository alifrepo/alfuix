const fs = require("fs");
const path = require("path");

// Read package.json
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

// Current year
const year = new Date().getFullYear();

// Homepage (default if not in package.json)
const homepage = pkg.homepage || "https://alfuix.com/";

// License link
const licenseLink = "https://github.com/alifrepo/alfuix/blob/main/LICENSE";

// Banner content (keep exactly as is)
const banner = `/*!\n` +
  ` * alfuix v${pkg.version} (${homepage})\n` +
  ` * Copyright ${year} - The ${pkg.author} Authors\n` +
  ` * Licensed under ${pkg.license} ${licenseLink}\n` +
  ` */\n`;

// Target directory (CSS-only)
const targetDir = "dist/css";

// Cache file path in project root
const cacheFile = path.join(".", ".cache.json");

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
  console.log(`Directory not found: ${targetDir}`);
  process.exit(0);
}

// Load or initialize cache
let cache = {};
if (fs.existsSync(cacheFile)) {
  try {
    cache = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
  } catch {
    cache = {};
  }
}

// Read all CSS files in the target directory
const files = fs.readdirSync(targetDir).filter(file => file.endsWith(".css"));

// Add banner to each file if not already present or version changed
files.forEach(file => {
  const filePath = path.join(targetDir, file);
  const content = fs.readFileSync(filePath, "utf8");

  // Force banner if missing or version changed
  if (!content.startsWith("/*!") || cache[file] !== pkg.version) {
    fs.writeFileSync(filePath, banner + content, "utf8");
    cache[file] = pkg.version;
    console.log(`✅ Banner added: ${filePath}`);
  }
});

// Update cache file in project root
fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), "utf8");
