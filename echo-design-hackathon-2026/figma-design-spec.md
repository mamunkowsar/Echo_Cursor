# EchoLogyX Design Hackathon 2026 — Design Specification

**Version:** Variation 2 (Designathon-style)  
**Last Updated:** 2026  
**Purpose:** Comprehensive design specification for recreating the website in Figma

---

## Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Effects & Shadows](#effects--shadows)
6. [Gradients](#gradients)
7. [Responsive Breakpoints](#responsive-breakpoints)

---

## Colors

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#050507` | `rgb(5, 5, 7)` | Main page background |
| Ink | `#0b0b10` | `rgb(11, 11, 16)` | Dark accent (not used in dark theme) |
| Paper | `#f6f3ef` | `rgb(246, 243, 239)` | Light accent (not used in dark theme) |
| White | `#ffffff` | `rgb(255, 255, 255)` | Pure white |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Violet | `#6f3bff` | `rgb(111, 59, 255)` | Primary accent, gradients |
| Aqua | `#24ffd1` | `rgb(36, 255, 209)` | Secondary accent, gradients |
| Magenta | `#ff4dff` | `rgb(255, 77, 255)` | Tertiary accent, gradients |

### Text Colors (with Opacity)

| Name | RGBA | Usage |
|------|------|-------|
| Primary Text | `rgba(255, 255, 255, 0.92)` | Main body text |
| Muted | `rgba(255, 255, 255, 0.72)` | Secondary text, labels |
| Muted 2 | `rgba(255, 255, 255, 0.6)` | Tertiary text |
| Muted 3 | `rgba(255, 255, 255, 0.66)` | Additional muted text |

### Border Colors

| Name | RGBA | Usage |
|------|------|-------|
| Line | `rgba(255, 255, 255, 0.14)` | Primary borders |
| Line 2 | `rgba(255, 255, 255, 0.22)` | Secondary borders |
| Line 3 | `rgba(255, 255, 255, 0.18)` | Dashed borders |
| Line 4 | `rgba(255, 255, 255, 0.12)` | Subtle borders |
| Line 5 | `rgba(255, 255, 255, 0.08)` | Very subtle borders |
| Line 6 | `rgba(255, 255, 255, 0.06)` | Section dividers |

### Background Colors (with Opacity)

| Name | RGBA | Usage |
|------|------|-------|
| Card Background | `rgba(0, 0, 0, 0.18)` | Card backgrounds |
| Card Background 2 | `rgba(0, 0, 0, 0.16)` | Alternative card backgrounds |
| Card Background 3 | `rgba(0, 0, 0, 0.14)` | Meta boxes |
| Header Background | `rgba(5, 5, 7, 0.72)` | Sticky header |
| Footer Background | `rgba(0, 0, 0, 0.22)` | Footer |
| Button Black | `rgba(0, 0, 0, 0.85)` | Primary button |
| Button White | `rgba(255, 255, 255, 0.92)` | Secondary button |
| Input Background | `rgba(0, 0, 0, 0.18)` | Form inputs |
| Ticker Background | `rgba(0, 0, 0, 0.2)` | Ticker strip |

---

## Typography

### Font Families

| Name | Stack | Usage |
|------|-------|-------|
| Primary | `Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif` | Body text, UI elements |
| Display | `Anton, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif` | Headings, large text |
| Monospace | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` | Code blocks |

### Font Sizes

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| XS | `0.72rem` (11.52px) | Auto | Time labels, small text |
| SM | `0.78rem` (12.48px) | Auto | Meta labels |
| Base | `1rem` (16px) | 1.5 | Body text |
| LG | `1.1rem` (17.6px) | Auto | Ticker text |
| XL | `1.3rem` (20.8px) | Auto | Modal titles |
| 2XL | `2rem` (32px) | Auto | Section titles |
| 3XL | `2.2rem` (35.2px) | Auto | Price amounts, why cards |
| 4XL | `2.4rem` (38.4px) | Auto | Detail numbers |
| Hero | `clamp(2.3rem, 4.4vw, 4.3rem)` | 0.92 | Hero title (responsive) |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | 400 | Default text |
| Medium | 500 | Medium emphasis |
| Semibold | 600 | Semibold text |
| Bold | 700 | Bold text |
| Extrabold | 800 | Extrabold text (most UI) |
| Black | 900 | Heaviest weight (headings, buttons) |

### Letter Spacing

| Name | Value | Usage |
|------|-------|-------|
| Tight | `-0.02em` | Headings, titles |
| Normal | `0.02em` | Buttons |
| Wide | `0.04em` | Section titles |
| Wider | `0.06em` | Price titles, detail numbers |
| Widest | `0.08em` | Uppercase labels |
| Extra Wide | `0.12em` | Stamp text |

### Text Transform

- **Uppercase:** Headings, buttons, labels, ticker text
- **None:** Body text, form inputs

---

## Spacing & Layout

### Container

- **Max Width:** `1120px`
- **Horizontal Padding:** `18px`
- **Alignment:** Centered

### Section Spacing

- **Vertical Padding:** `48px` (top and bottom)
- **Section Gap:** Natural flow (no explicit gap)

### Component Spacing

| Element | Padding | Gap |
|---------|---------|-----|
| Cards | `16px` | — |
| Forms | — | `12px` (between fields) |
| Fields | — | `7px` (label to input) |
| Buttons | `11px 14px` | — |
| Inputs | `12px` | — |
| Pricing Cards | `16px` | `14px` (between cards) |
| Why Cards | `16px` | `14px` (between cards) |
| Detail Items | `14px` | `12px` (between items) |
| People Grid | `16px` | `14px` (between cards) |
| Logo Grid | — | `14px` (between logos) |
| Hero Meta | `12px` | `10px` (between items) |
| Countdown Grid | `12px 8px` (time boxes) | `10px` (between elements) |
| Footer | `22px` (vertical) | `12px` (between elements) |

### Grid Systems

#### Hero Section
- **Layout:** 2 columns (1.2fr : 0.8fr)
- **Gap:** `18px`
- **Mobile:** Single column

#### Pricing Cards
- **Desktop:** 3 columns (equal)
- **Mobile:** Single column
- **Gap:** `14px`

#### Forms
- **Desktop:** 2 columns (equal)
- **Mobile:** Single column
- **Gap:** `14px`

#### Why Cards
- **Desktop:** 3 columns (equal)
- **Mobile:** Single column
- **Gap:** `14px`

#### People Grid (Jury)
- **Desktop:** 3 columns (equal)
- **Mobile:** Single column
- **Gap:** `14px`

#### Logo Grid
- **Desktop:** 4 columns (equal)
- **Mobile:** 2 columns
- **Gap:** `14px`

#### Contact Grid
- **Desktop:** 2 columns (equal)
- **Mobile:** Single column
- **Gap:** `14px`

#### Hero Meta
- **Desktop:** 3 columns (equal)
- **Mobile:** Single column
- **Gap:** `10px`

#### Countdown Grid
- **Layout:** `1fr 6px 1fr 6px 1fr 6px 1fr` (time units with separators)
- **Gap:** `10px`

---

## Components

### Header / Topbar

- **Height:** Auto (padding `14px` top/bottom)
- **Background:** `rgba(5, 5, 7, 0.72)` with `backdrop-filter: blur(14px)`
- **Border:** `2px solid rgba(255, 255, 255, 0.12)` (bottom)
- **Position:** Sticky, top: 0
- **Z-index:** 50

#### Logo
- **Mark Size:** `44px × 44px`
- **Border Radius:** `16px`
- **Border:** `2px solid rgba(255, 255, 255, 0.16)`
- **Background:** Gradient `linear-gradient(135deg, rgba(111, 59, 255, 0.95), rgba(36, 255, 209, 0.85))`
- **Shadow:** `0 14px 0 rgba(0, 0, 0, 0.55)`
- **Gap between mark and text:** `12px`

#### Navigation
- **Gap between links:** `10px`
- **Link Padding:** `10px`
- **Link Border Radius:** `12px`

### Hero Section

- **Padding Top:** `34px`
- **Layout:** 2-column grid (desktop), 1 column (mobile)

#### Hero Stamp
- **Size:** `120px × 120px`
- **Border Radius:** `999px` (circle)
- **Background:** `rgba(0, 0, 0, 0.22)`
- **Border:** `2px dashed rgba(255, 255, 255, 0.22)`
- **Transform:** `rotate(8deg)`
- **Position:** Absolute, `right: 22px, top: 18px` (desktop)

#### Kicker Badge
- **Padding:** `10px 12px`
- **Border Radius:** `999px`
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Background:** `rgba(0, 0, 0, 0.16)`

#### Hero Title
- **Font:** Anton (display)
- **Size:** `clamp(2.3rem, 4.4vw, 4.3rem)` (responsive)
- **Line Height:** `0.92`
- **Letter Spacing:** `0.02em`
- **Text Transform:** Uppercase
- **Margin:** `14px 0 10px`

#### Hero Title Accent
- **Text Stroke:** `1.5px rgba(255, 255, 255, 0.55)`
- **Text Shadow:** `0 3px 0 rgba(0, 0, 0, 0.65)`
- **Margin Top:** `6px`

#### Hero Meta Boxes
- **Border:** `2px solid rgba(255, 255, 255, 0.12)`
- **Border Radius:** `16px`
- **Background:** `rgba(0, 0, 0, 0.14)`
- **Padding:** `12px`
- **Shadow:** `0 10px 0 rgba(0, 0, 0, 0.45)`
- **Label:** `0.78rem`, uppercase, `0.1em` letter spacing
- **Value:** `900` weight, `-0.02em` letter spacing

### Countdown Card

- **Border Radius:** `22px`
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `14px`
- **Shadow:** `0 26px 70px rgba(0, 0, 0, 0.55)`
- **Position:** Sticky, `top: 86px` (desktop)

#### Time Units
- **Border:** `2px solid rgba(255, 255, 255, 0.12)`
- **Border Radius:** `16px`
- **Background:** `rgba(255, 255, 255, 0.03)`
- **Padding:** `12px 8px`
- **Number Font:** Anton, `2.1rem`, uppercase
- **Number Shadow:** `0 3px 0 rgba(0, 0, 0, 0.65)`
- **Label:** `0.72rem`, uppercase, `0.08em` letter spacing

#### Separators
- **Size:** `6px × 28px`
- **Border Radius:** `6px`
- **Background:** Gradient `linear-gradient(180deg, rgba(36, 255, 209, 0.8), rgba(111, 59, 255, 0.8))`

### Ticker

- **Border:** `2px solid rgba(255, 255, 255, 0.08)` (top and bottom)
- **Background:** `rgba(0, 0, 0, 0.2)`
- **Padding:** `12px 0`
- **Font:** Anton, `1.1rem`, uppercase
- **Letter Spacing:** `0.08em`
- **Text Shadow:** `0 2px 0 rgba(0, 0, 0, 0.65)`
- **Gap between items:** `24px`

### Cards

- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `16px`
- **Shadow:** `0 18px 0 rgba(0, 0, 0, 0.55)`

### Pricing Cards

- **Border:** `2px dashed rgba(255, 255, 255, 0.18)` (solid for ghost variant)
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.18)` (gradient for ghost: `linear-gradient(135deg, rgba(111, 59, 255, 0.2), rgba(36, 255, 209, 0.1))`)
- **Padding:** `16px`
- **Shadow:** `0 14px 0 rgba(0, 0, 0, 0.55)`

#### Price Title
- **Font Weight:** `900`
- **Text Transform:** Uppercase
- **Letter Spacing:** `0.06em`

#### Price Amount
- **Font:** Anton, `2.2rem`
- **Letter Spacing:** `0.04em`
- **Margin Top:** `10px`

### Forms

#### Inputs / Selects / Textareas
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Border:** `2px solid rgba(255, 255, 255, 0.12)`
- **Border Radius:** `16px`
- **Padding:** `12px`
- **Color:** `rgba(255, 255, 255, 0.92)`
- **Focus Border:** `rgba(36, 255, 209, 0.55)`
- **Focus Shadow:** `0 0 0 4px rgba(36, 255, 209, 0.16)`

#### Labels
- **Font Weight:** `900`
- **Letter Spacing:** `-0.01em`

### Buttons

- **Border Radius:** `16px`
- **Padding:** `11px 14px`
- **Font Weight:** `900`
- **Letter Spacing:** `0.02em`
- **Text Transform:** Uppercase
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`

#### Button Black
- **Background:** `rgba(0, 0, 0, 0.85)`
- **Color:** `rgba(255, 255, 255, 0.95)`

#### Button White
- **Background:** `rgba(255, 255, 255, 0.92)`
- **Color:** `rgba(0, 0, 0, 0.9)`
- **Border:** `2px solid rgba(255, 255, 255, 0.2)`

### Why Cards

- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `16px`
- **Shadow:** `0 14px 0 rgba(0, 0, 0, 0.55)`

#### Why Kicker
- **Font Size:** `0.82rem`
- **Font Weight:** `900`
- **Text Transform:** Uppercase
- **Letter Spacing:** `0.08em`
- **Color:** `rgba(255, 255, 255, 0.72)`

#### Why Big
- **Font:** Anton, `2.2rem`
- **Letter Spacing:** `0.03em`
- **Text Transform:** Uppercase
- **Margin Top:** `10px`

### Event Details

#### Detail Items
- **Layout:** 2 columns (`78px` number column, `1fr` content column) on desktop, 1 column on mobile
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `14px`
- **Gap:** `12px`

#### Detail Number
- **Font:** Anton, `2.4rem`
- **Letter Spacing:** `0.06em`
- **Text Transform:** Uppercase
- **Color:** `rgba(255, 255, 255, 0.82)`
- **Text Shadow:** `0 3px 0 rgba(0, 0, 0, 0.65)`

### Rules Download Card

- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `22px`
- **Background:** Gradient `linear-gradient(135deg, rgba(111, 59, 255, 0.2), rgba(36, 255, 209, 0.1))`
- **Padding:** `16px`
- **Shadow:** `0 14px 0 rgba(0, 0, 0, 0.55)`
- **Layout:** Flex, space-between

### FAQ Accordion

#### QA Items
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `18px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `4px 0`
- **Gap:** `10px` (between items)

#### Summary
- **Padding:** `14px`
- **Font Weight:** `900`
- **Letter Spacing:** `-0.01em`
- **Indicator:** `▾` (closed), `▴` (open), right-aligned

#### QA Body
- **Padding:** `0 14px 14px`

### People Cards (Jury)

- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Padding:** `16px`
- **Shadow:** `0 14px 0 rgba(0, 0, 0, 0.55)`
- **Layout:** Flex, gap `12px`

#### Avatar
- **Size:** `46px × 46px`
- **Border Radius:** `16px`
- **Background:** `rgba(0, 0, 0, 0.18)`
- **Border:** `2px solid rgba(255, 255, 255, 0.14)`
- **Font Weight:** `900`

#### Person Name
- **Font Weight:** `900`
- **Letter Spacing:** `-0.02em`

#### Person Role
- **Font Size:** `0.76rem`
- **Font Weight:** `800`
- **Text Transform:** Uppercase
- **Letter Spacing:** `0.08em`
- **Color:** `rgba(255, 255, 255, 0.66)`
- **Margin Top:** `4px`

### Logo Cards (Partners)

- **Border:** `2px dashed rgba(255, 255, 255, 0.18)`
- **Border Radius:** `22px`
- **Background:** `rgba(0, 0, 0, 0.16)`
- **Min Height:** `90px`
- **Layout:** Grid, centered content
- **Font Weight:** `900`
- **Text Transform:** Uppercase
- **Letter Spacing:** `0.06em`

### Footer

- **Border:** `2px solid rgba(255, 255, 255, 0.08)` (top)
- **Background:** `rgba(0, 0, 0, 0.22)`
- **Padding:** `22px 0`
- **Layout:** Flex, space-between

---

## Effects & Shadows

### Shadows

| Name | Value | Usage |
|------|-------|-------|
| Primary | `0 18px 0 rgba(0, 0, 0, 0.55)` | Cards |
| Secondary | `0 26px 70px rgba(0, 0, 0, 0.55)` | Countdown card, modals |
| Logo | `0 14px 0 rgba(0, 0, 0, 0.55)` | Logo mark |
| Meta | `0 10px 0 rgba(0, 0, 0, 0.45)` | Hero meta boxes |
| Pricing | `0 14px 0 rgba(0, 0, 0, 0.55)` | Pricing cards, why cards, people cards |

### Text Shadows

| Name | Value | Usage |
|------|-------|-------|
| Primary | `0 3px 0 rgba(0, 0, 0, 0.65)` | Display text, hero title accent, detail numbers, countdown numbers |
| Secondary | `0 2px 0 rgba(0, 0, 0, 0.65)` | Ticker text |

### Backdrop Blur

- **Header:** `14px` blur on `rgba(5, 5, 7, 0.72)` background

### Grain Overlay

- **Opacity:** `0.14`
- **Mix Blend Mode:** Overlay
- **Pattern:** 
  - Vertical lines: `repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0, rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 3px)`
  - Horizontal lines: `repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 4px)`

---

## Gradients

### Background Gradients

#### Main Background
```
radial-gradient(900px 600px at 15% 10%, rgba(111, 59, 255, 0.45), transparent 60%),
radial-gradient(900px 600px at 90% 15%, rgba(36, 255, 209, 0.22), transparent 60%),
radial-gradient(900px 600px at 70% 90%, rgba(255, 77, 255, 0.12), transparent 55%),
#050507
```

#### Card Accent (Ghost Pricing Card)
```
linear-gradient(135deg, rgba(111, 59, 255, 0.2), rgba(36, 255, 209, 0.1))
```

#### Logo Mark
```
linear-gradient(135deg, rgba(111, 59, 255, 0.95), rgba(36, 255, 209, 0.85))
```

#### Rules Download Card
```
linear-gradient(135deg, rgba(111, 59, 255, 0.2), rgba(36, 255, 209, 0.1))
```

#### Countdown Separator
```
linear-gradient(180deg, rgba(36, 255, 209, 0.8), rgba(111, 59, 255, 0.8))
```

---

## Responsive Breakpoints

### Mobile Breakpoint

- **Max Width:** `980px`

### Mobile Changes

1. **Hero Section:**
   - Single column layout
   - Hero stamp: static position (not absolute)
   - Hero meta: single column

2. **Grids:**
   - Pricing: 3 columns → 1 column
   - Forms: 2 columns → 1 column
   - Why cards: 3 columns → 1 column
   - People: 3 columns → 1 column
   - Logos: 4 columns → 2 columns
   - Contact: 2 columns → 1 column
   - Detail items: 2 columns → 1 column

3. **Navigation:**
   - Desktop nav hidden
   - Mobile toggle button shown

4. **Countdown:**
   - Sticky position removed (static)

---

## Component Dimensions Summary

| Component | Width | Height | Notes |
|----------|-------|--------|-------|
| Container | `1120px` max | Auto | Centered, `18px` padding |
| Logo Mark | `44px` | `44px` | Square |
| Hero Stamp | `120px` | `120px` | Circle |
| Avatar | `46px` | `46px` | Square |
| Countdown Separator | `6px` | `28px` | Vertical bar |
| Logo Card | Auto | `90px` min | Grid item |
| Button | Auto | Auto | `11px 14px` padding |
| Input | Auto | Auto | `12px` padding |

---

## Notes for Figma Recreation

1. **Layers:** Use semantic naming (e.g., `Header`, `Hero Section`, `Countdown Card`)
2. **Components:** Create reusable components for cards, buttons, inputs
3. **Auto Layout:** Use Figma's Auto Layout for spacing and responsive behavior
4. **Effects:** Apply shadows and gradients as specified
5. **Text Styles:** Create text styles for each typography variant
6. **Color Styles:** Create color styles for all colors (including opacity variants)
7. **Gradients:** Use Figma's gradient tool to recreate radial and linear gradients
8. **Grain:** Add grain texture as a separate layer with overlay blend mode
9. **Responsive:** Use constraints and auto layout for responsive behavior
10. **Data Attributes:** The HTML includes `data-component` and `data-element` attributes for reference

---

**End of Design Specification**

