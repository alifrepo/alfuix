# 🧾 Changelog

All notable changes to **alfuix** will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

---

## [1.0.2] — 2025-11-03

### 🧩 Refined Framework Scope
- Converted **alfuix** to a **CSS-only** framework — removed all JavaScript dependencies.  
- Focused on **enhancing utilities and components**, not grid or layout systems.  
- Now works *alongside* frameworks like **Bootstrap** and **TailwindCSS**, extending their visual and utility layers.

### ✨ Updated Features
- Enhanced SCSS structure with modular files:  
  - `alfuix-clip` — advanced shapes and clipping effects.  
  - `alfuix-animation` — motion-based utility classes.  
  - `alfuix-utilities` — extended filters, borders, and transforms.  
- Improved build scripts for **Sass-only** compilation and banner injection.
- Added friendly `postinstall` success message for npm installations.
- Introduced `peerDependenciesMeta` to allow optional Bootstrap/Tailwind integration.

### 🧾 Documentation & Metadata
- Updated `README.md` to reflect **CSS-only** architecture.  
- Revised `package.json` for simplified exports and dev dependencies.  
- Added clear integration examples for **Bootstrap**, **Tailwind**, and **Standalone** use cases.

---

## [1.0.0] — 2025-10-28

### 🎉 Initial Release

- Introduced **alfuix**, a futuristic, modular **SCSS + JS UI framework** extending **Bootstrap** and **Tailwind**.
- Core features:
  - Framework-agnostic architecture compatible with **Bootstrap 5.3+** and **Tailwind CSS**.
  - Advanced SCSS utilities for **clip-paths**, **filters**, **typography**, and **effects**.
  - Futuristic animations: motion, scroll, reveal, and transform.
  - Standalone builds: `alfuix-clip`, `alfuix-animation`, and `alfuix-utilities`.
  - Plugin-ready JS layer for `particles.js`, `fslightbox`, and `slick-carousel`.
- Production-ready structure:
  - `/scss` — source files (core, components, utilities, effects)
  - `/js` — animation and motion scripts
  - `/dist` — compiled, minified builds
- Licensed under **MIT** — by [The Alif Lab & alfuix Authors](https://github.com/alifrepo/alfuix).

---

## [Unreleased]

### ✨ Planned
- New futuristic SCSS modules: `_3d.scss`, `_neon.scss`, `_parallax.scss`.
- Expand **motion-utility library** with `data-motion` declarative syntax.
- Introduce `alfuix-theme` system for extended color and tone mapping.

### 🔧 Improvements
- Further optimize SCSS variable hierarchy for **dark mode** and **design tokens**.
- Reduce final CSS footprint through conditional Sass imports.

### 🐞 Fixes
- Adjusted filter and clip utility names for consistency.
- Improved SCSS build order to avoid dependency conflicts.

### 🗑️ Deprecated
- Removed all legacy JS animation utilities.

---

## 📦 Versioning Guidelines

| Type | Description | Example |
|------|--------------|----------|
| **MAJOR** | Breaking changes (structure, architecture, or imports) | 1.x.x → 2.0.0 |
| **MINOR** | Backward-compatible features or modules | 1.0.2 → 1.1.0 |
| **PATCH** | Fixes, cleanup, or minor improvements | 1.0.6 → 1.0.7 |

---

## 🧠 Contributing

When submitting pull requests:
1. Update the relevant section in this changelog under **[Unreleased]**.  
2. Follow the **Conventional Commit** format for consistency:  
