#!/usr/bin/env node
/**
 * Build script: Renders Nunjucks templates into index.html
 * Usage: node build.js [--watch]
 */

const nunjucks = require("nunjucks");
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "src");
const TEMPLATE = "index.njk";
const DATA_FILE = path.join(SRC_DIR, "data.json");
const OUTPUT_FILE = path.join(__dirname, "index.html");

// Configure Nunjucks to look inside /src for templates & partials
const env = nunjucks.configure(SRC_DIR, {
  autoescape: true,
  noCache: true,
});

function build() {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const html = nunjucks.render(TEMPLATE, data);
    fs.writeFileSync(OUTPUT_FILE, html, "utf8");
    console.log(`[${new Date().toLocaleTimeString()}] ✅ Built → index.html`);
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ Build failed:`, err.message);
  }
}

// Initial build
build();

// Watch mode
if (process.argv.includes("--watch")) {
  console.log("👀 Watching src/ for changes...");
  fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (filename) {
      console.log(`   Changed: ${filename}`);
      build();
    }
  });
}
