const fs = require("fs");
const path = require("path");

const dir = "dist/css";

if (!fs.existsSync(dir)) return;

fs.readdirSync(dir).forEach(file => {
  const filePath = path.join(dir, file);
  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ Removed orphan CSS file: ${filePath}`);
  }
});
