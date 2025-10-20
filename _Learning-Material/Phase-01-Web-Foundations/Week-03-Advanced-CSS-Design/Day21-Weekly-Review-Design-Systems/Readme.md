# 🎨 Orchis Project – Design System

This design system is the visual and style guideline for the **Orchis Project Portfolio**. It ensures consistency, reusability, and scalability across all components, preparing the project for future Web3 DApps.

---

## 🌈 Colors

| Name                    | Hex       | Usage                        |
| ----------------------- | --------- | ---------------------------- |
| **Background**          | `#ffffff` | Page background (light mode) |
| **Surface**             | `#f8f9fa` | Card backgrounds             |
| **Border**              | `#e9ecef` | Card and section borders     |
| **Text Primary**        | `#212529` | Main body text               |
| **Text Secondary**      | `#6c757d` | Subtitles, descriptions      |
| **Accent**              | `#7c3aed` | Buttons, links, highlights   |
| **Background Dark**     | `#1a1a1a` | Dark mode background         |
| **Surface Dark**        | `#2c2c2c` | Dark mode card surface       |
| **Border Dark**         | `#444444` | Dark mode borders            |
| **Text Dark**           | `#e0e0e0` | Body text in dark mode       |
| **Text Secondary Dark** | `#a0a0a0` | Secondary text in dark mode  |

---

## ✍️ Typography

- **Font Family**:  
  `Inter, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

- **Base Font Size**: `16px`

- **Headings**
  - `<h1>` → Page titles, hero sections
  - `<h2>` → Section titles
  - `<h3>` → Card headers, feature titles

- **Line Height**: `1.5` (optimal readability)
- **Font Weights**:
  - 400 → Body text
  - 500–600 → Headings
  - 700 → Strong emphasis

---

## 📐 Layout Tokens

- **Container Width**: `1200px`
- **Max Content Width**: `65ch`
- **Spacing Unit**: `1rem`
- **Border Radius**: `8px`

**Shadows**

- Default → `0 6px 16px rgba(0,0,0,0.1)`
- Hover → `0 12px 24px rgba(124,58,237,0.15)`

---

## 🧩 Components

### 🔘 Buttons

- **Primary Button**
  - Background: Accent color
  - Text: White
  - Hover: Darker accent + shadow
- **Secondary Button**
  - Transparent background
  - Border: Accent color
  - Hover: Light accent fill

---

### 📦 Cards

- **Skill Cards**
  - Icon + Title + Description + Tech list
  - Hover: subtle lift + accent border
- **Project Cards**
  - Title + Description + Tech stack tags
  - Equal height across grid

---

### 🌐 Social Buttons

- Circular, brand-colored background
- Hover overlay effect
- `aria-label` for accessibility

---

### ⏳ Loader / Spinner

- Pure CSS circular spinner
- Accent-colored top border
- Infinite rotation animation
- Overlay with backdrop blur

---

## 🌗 Modes

- **Light Mode** → Default
- **Dark Mode** → Activated via `prefers-color-scheme: dark`
- All colors managed with **CSS Variables** for easy theming and switching.

---

## 🔑 Principles

1. **Simplicity** → clean, minimal, easy to maintain
2. **Consistency** → spacing, radius, shadows are standardized
3. **Accessibility (A11Y)** → semantic HTML, ARIA labels, sufficient contrast
4. **Reusability** → components can be reused both in the Orchis Portfolio and future DApps

---

📌 **Note:**  
This design system is an early foundation (Week 3). It will be extended with patterns for **forms, modals, tables, and interactive elements** as the roadmap progresses.
