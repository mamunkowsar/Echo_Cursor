# Figma Import Guide — EchoLogyX Design Hackathon 2026

**Version:** Variation 2  
**Purpose:** Step-by-step instructions for importing the website into Figma

---

## Overview

This guide provides multiple methods for converting the HTML/CSS website into a Figma design file. Since Figma doesn't natively import HTML/CSS, we'll cover:

1. **Plugin-based import** (recommended for quick start)
2. **Manual recreation** (recommended for pixel-perfect control)
3. **Hybrid approach** (import + manual refinement)

---

## Method 1: Plugin-Based Import

### Recommended Plugins

1. **HTML to Design** (by Figma)
   - Official Figma plugin
   - Converts HTML/CSS to Figma frames
   - Best for: Quick conversion of static layouts

2. **Figma Import** (by various developers)
   - Alternative HTML import plugin
   - May have different conversion quality

3. **Design Tokens** (for importing design tokens)
   - Import `design-tokens.json` into Figma
   - Creates color styles, text styles, etc.

### Steps for HTML to Design Plugin

1. **Prepare the HTML file:**
   - Use `variation-2-figma.html` (optimized for import)
   - Ensure the file is accessible (local file or hosted)

2. **Install the plugin:**
   - Open Figma
   - Go to `Plugins` → `Browse plugins`
   - Search for "HTML to Design"
   - Click `Install`

3. **Run the plugin:**
   - In Figma, go to `Plugins` → `HTML to Design`
   - Choose one of these options:
     - **Option A:** Open `variation-2-figma.html` in a browser, copy the URL
     - **Option B:** If the plugin supports file upload, select the HTML file
   - Click `Import` or `Convert`

4. **Review and refine:**
   - The plugin will create frames and layers
   - Check that fonts are loaded (Anton, Inter)
   - Verify colors match the design spec
   - Adjust spacing and alignment as needed
   - Convert repeated elements into components

5. **Import design tokens:**
   - Use a design tokens plugin to import `design-tokens.json`
   - This will create color styles and text styles automatically
   - Apply these styles to the imported elements

### Limitations of Plugin Import

- **JavaScript removed:** Interactive elements (modals, forms) will be static
- **Fonts:** May need to install Anton and Inter fonts in Figma
- **Gradients:** May need manual adjustment
- **Shadows:** May need manual recreation
- **Responsive behavior:** Not preserved (create separate frames for mobile)
- **Grain overlay:** Needs to be added manually

---

## Method 2: Manual Recreation (Recommended for Best Results)

### Prerequisites

- Access to `figma-design-spec.md` (complete measurements)
- Access to `component-breakdown.md` (structure reference)
- Access to `design-tokens.json` (for importing tokens)
- Screenshots or live preview of the website

### Step-by-Step Process

#### Phase 1: Setup

1. **Create a new Figma file:**
   - Name: "EchoLogyX Hackathon 2026 — Variation 2"
   - Set frame size: `1440px × auto` (or your preferred desktop width)

2. **Import design tokens:**
   - Install a design tokens plugin (e.g., "Design Tokens")
   - Import `design-tokens.json`
   - This creates:
     - Color styles (all colors with opacity variants)
     - Text styles (typography scales)
     - Effect styles (shadows)

3. **Install fonts:**
   - **Inter:** Available in Figma by default (or install from Google Fonts)
   - **Anton:** Install from Google Fonts or use a similar bold sans-serif

4. **Create base components:**
   - Create a `Container` component (max-width 1120px, centered, padding 18px)
   - Create reusable components:
     - `ButtonBlack`
     - `ButtonWhite`
     - `Card`
     - `Input`
     - `PriceCard` (with variants)

#### Phase 2: Build Header

1. **Create Header frame:**
   - Size: Full width, auto height
   - Background: `rgba(5, 5, 7, 0.72)`
   - Effect: Backdrop blur `14px` (if supported)
   - Border: `2px solid rgba(255, 255, 255, 0.12)` (bottom)
   - Position: Set as sticky (document in notes)

2. **Add Logo:**
   - Create `LogoMark` frame (44×44px)
   - Apply gradient: `linear-gradient(135deg, rgba(111, 59, 255, 0.95), rgba(36, 255, 209, 0.85))`
   - Add border and shadow
   - Add text "EX"
   - Create `LogoText` frame with title and subtitle
   - Combine into `Logo` component

3. **Add Navigation:**
   - Create horizontal frame with nav links
   - Apply text styles
   - Add `ButtonBlack` for CTA

#### Phase 3: Build Hero Section

1. **Create Hero frame:**
   - Padding: `34px 0 0`
   - Background: Apply gradient (see design spec)

2. **Add grain overlay:**
   - Create a frame covering the entire hero
   - Apply grain pattern (use a texture image or create with lines)
   - Set blend mode: Overlay
   - Opacity: `14%`

3. **Create Hero Inner:**
   - Use 2-column auto layout (1.2fr : 0.8fr)
   - Gap: `18px`

4. **Build Hero Copy:**
   - Add `Kicker` badge
   - Add `HeroTitle` (use Anton font, large size)
   - Add `HeroTitleAccent` with text stroke effect
   - Add `HeroLead` text
   - Add `HeroMeta` grid (3 columns)

5. **Build Countdown Card:**
   - Create `CountdownCard` component
   - Add header with title and button
   - Create countdown grid (4 time units with separators)
   - Add footer with note and button
   - Apply shadows and borders

6. **Add Hero Stamp:**
   - Create circular frame (120×120px)
   - Rotate 8 degrees
   - Add dashed border
   - Position absolutely (right: 22px, top: 18px)

7. **Add Ticker:**
   - Create full-width frame
   - Add horizontal scrolling text (static for Figma)
   - Apply borders and background

#### Phase 4: Build Remaining Sections

Follow the same pattern for each section:

1. **Apply Section:**
   - Section head (title + subtitle)
   - Pricing cards (3-column grid)
   - Forms (2-column grid)
   - Use `FormCard` component

2. **Why Section:**
   - Section head
   - Why cards (3-column grid)
   - Use `WhyCard` component

3. **Event Section:**
   - Section head
   - Detail items (vertical stack)
   - Use `DetailItem` component

4. **Rules Section:**
   - Section head
   - Rules download card (gradient background)
   - FAQ accordion items

5. **Jury Section:**
   - Section head
   - People grid (3-column)
   - Use `PersonCard` component

6. **Partners Section:**
   - Section head
   - Logo grid (4-column)
   - Use `LogoCard` component

7. **FAQ Section:**
   - Section head
   - FAQ accordion items

8. **Contact Section:**
   - Section head
   - Contact grid (2-column)
   - Use `Card` component

9. **Footer:**
   - Border top
   - Footer inner (horizontal, space-between)
   - Copyright and link

#### Phase 5: Create Mobile Version

1. **Duplicate desktop frame:**
   - Create a new frame: `1440px × auto` → `375px × auto` (or your mobile width)

2. **Adjust layouts:**
   - Change all grids to single column (except logos: 2 columns)
   - Adjust hero layout to single column
   - Make hero stamp static (not absolute)
   - Hide desktop nav, show mobile toggle
   - Adjust spacing as needed

3. **Test responsive behavior:**
   - Use Figma's constraints
   - Test with different frame widths

#### Phase 6: Polish and Refine

1. **Apply effects:**
   - Add all shadows (see design spec)
   - Verify gradients match
   - Add text shadows where specified

2. **Create component variants:**
   - Button states (default, hover, active)
   - Input states (default, focus)
   - Accordion states (open, closed)

3. **Organize layers:**
   - Use semantic naming
   - Group related elements
   - Add notes for interactive behavior

4. **Create style guide:**
   - Document all colors, typography, spacing
   - Create a separate page with component library

---

## Method 3: Hybrid Approach

1. **Use plugin for initial import:**
   - Import `variation-2-figma.html` using HTML to Design plugin
   - This gives you a starting structure

2. **Refine manually:**
   - Fix fonts (install Anton, Inter)
   - Adjust colors to match design tokens
   - Recreate gradients and shadows
   - Convert elements to components
   - Add grain overlay
   - Create mobile version

3. **Import design tokens:**
   - Use design tokens plugin to create styles
   - Apply styles to imported elements

---

## Tips for Maintaining Design Fidelity

### Colors

- **Use color styles:** Import design tokens to create reusable color styles
- **Opacity variants:** Create separate color styles for each opacity level
- **Gradients:** Recreate gradients manually in Figma (may need adjustment)

### Typography

- **Create text styles:** For each typography variant (see design spec)
- **Font loading:** Ensure Anton and Inter are available in Figma
- **Letter spacing:** Pay attention to letter spacing values
- **Text transform:** Apply uppercase where specified

### Spacing

- **Use Auto Layout:** For consistent spacing
- **Reference design spec:** Check all padding and gap values
- **Container width:** Set max-width 1120px with centered alignment

### Shadows

- **Recreate manually:** Figma's shadow tool may not match exactly
- **Reference design spec:** Use exact shadow values
- **Layer effects:** Apply shadows as layer effects

### Gradients

- **Radial gradients:** Use Figma's gradient tool
- **Multiple gradients:** Layer multiple gradients for background
- **Reference design spec:** Use exact gradient values

### Components

- **Create early:** Build reusable components as you go
- **Use variants:** For different states (e.g., ButtonBlack, ButtonWhite)
- **Naming:** Use semantic names (see component breakdown)

---

## Common Issues and Solutions

### Issue: Fonts not loading

**Solution:**
- Install fonts in Figma (Google Fonts or local installation)
- Use similar fonts as fallback
- Document font substitutions

### Issue: Gradients don't match

**Solution:**
- Recreate gradients manually in Figma
- Use design spec values
- Test with different gradient stops

### Issue: Shadows look different

**Solution:**
- Figma's shadow tool may render differently
- Adjust blur and spread values
- Use multiple shadows if needed

### Issue: Responsive behavior

**Solution:**
- Create separate frames for desktop and mobile
- Use constraints for flexible elements
- Document responsive breakpoints

### Issue: Grain overlay

**Solution:**
- Create a texture image
- Use Figma's pattern fill (if available)
- Or create with repeating lines/grid
- Apply overlay blend mode

---

## File Organization in Figma

### Recommended Structure

```
Page 1: Desktop
├── Frame: Header
├── Frame: Hero Section
├── Frame: Apply Section
├── Frame: Why Section
├── Frame: Event Section
├── Frame: Rules Section
├── Frame: Jury Section
├── Frame: Partners Section
├── Frame: FAQ Section
├── Frame: Contact Section
└── Frame: Footer

Page 2: Mobile
├── (Same structure, adjusted for mobile)

Page 3: Components
├── Buttons
├── Cards
├── Forms
├── Navigation
└── Other Components

Page 4: Style Guide
├── Colors
├── Typography
├── Spacing
└── Effects
```

---

## Post-Import Checklist

- [ ] All fonts loaded (Anton, Inter)
- [ ] Colors match design tokens
- [ ] Typography styles created and applied
- [ ] Shadows match design spec
- [ ] Gradients recreated accurately
- [ ] Components created for reusable elements
- [ ] Mobile version created
- [ ] Grain overlay added
- [ ] Interactive states documented
- [ ] Layer names are semantic
- [ ] Design tokens imported
- [ ] Style guide created

---

## Additional Resources

### Files Provided

1. **`variation-2-figma.html`** — Optimized HTML for plugin import
2. **`figma-design-spec.md`** — Complete design specification
3. **`component-breakdown.md`** — Component hierarchy
4. **`design-tokens.json`** — Design tokens for import
5. **`variation-2.css`** — Original CSS (for reference)

### Figma Plugins to Install

1. **HTML to Design** — HTML import
2. **Design Tokens** — Token import
3. **Google Fonts** — Font installation (if needed)
4. **Figma to Code** — Export back to code (optional)

### External Resources

- [Figma Auto Layout Guide](https://help.figma.com/hc/en-us/articles/5731383287959)
- [Figma Components Guide](https://help.figma.com/hc/en-us/articles/5579474826519)
- [Figma Design Tokens](https://www.figma.com/community/plugin/888356646278934516)

---

## Next Steps

1. Choose your import method (plugin, manual, or hybrid)
2. Follow the steps for your chosen method
3. Reference the design spec and component breakdown as needed
4. Test and refine the design
5. Create mobile version
6. Document any deviations or customizations

---

**End of Import Guide**

