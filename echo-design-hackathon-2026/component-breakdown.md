# Component Breakdown — EchoLogyX Design Hackathon 2026

**Version:** Variation 2  
**Purpose:** Map HTML structure to Figma frame/component hierarchy

---

## Layer Naming Conventions

- **Frames:** Use PascalCase (e.g., `HeroSection`, `CountdownCard`)
- **Components:** Use PascalCase with descriptive names (e.g., `ButtonBlack`, `PriceCard`)
- **Elements:** Use camelCase (e.g., `heroTitle`, `timeUnit`)
- **Variants:** Use descriptive suffixes (e.g., `ButtonBlack`, `ButtonWhite`)

---

## Top-Level Structure

```
Page: EchoLogyX Hackathon 2026
├── Header (Frame: sticky, top: 0)
│   ├── Container (Frame: max-width 1120px, centered)
│   │   ├── Logo (Component)
│   │   └── Navigation (Frame)
│   └── Mobile Nav (Frame: hidden on desktop)
├── Main (Frame)
│   ├── Hero Section (Frame)
│   ├── Apply Section (Frame)
│   ├── Why Section (Frame)
│   ├── Event Section (Frame)
│   ├── Rules Section (Frame)
│   ├── Jury Section (Frame)
│   ├── Partners Section (Frame)
│   ├── FAQ Section (Frame)
│   └── Contact Section (Frame)
└── Footer (Frame)
```

---

## Component Hierarchy

### 1. Header / Topbar

**Frame:** `Header`  
**Properties:**
- Position: Sticky, top: 0
- Background: `rgba(5, 5, 7, 0.72)` with backdrop blur `14px`
- Border: `2px solid rgba(255, 255, 255, 0.12)` (bottom)
- Z-index: 50

**Children:**
- `Container` (Frame: max-width 1120px, padding 0 18px)
  - `Logo` (Component)
    - `LogoMark` (Frame: 44×44px, gradient background)
    - `LogoText` (Frame: vertical stack)
      - `LogoTitle` (Text: "EchoLogyX")
      - `LogoSub` (Text: "Design Hackathon 2026")
  - `Navigation` (Frame: horizontal, gap 10px)
    - `NavLink` × 7 (Text components)
    - `NavCTA` (Component: ButtonBlack)

---

### 2. Hero Section

**Frame:** `HeroSection`  
**Properties:**
- Padding: `34px 0 0`
- Background: Gradient (see design spec)

**Children:**
- `Container` (Frame: max-width 1120px, padding 0 18px)
  - `HeroInner` (Frame: 2-column grid, gap 18px)
    - `HeroStamp` (Frame: 120×120px, absolute, rotated 8deg)
      - `StampTop` (Text: "UNWRAPPED")
      - `StampMid` (Text: "EX")
      - `StampBot` (Text: "2026")
    - `HeroCopy` (Frame: vertical stack)
      - `Kicker` (Component: Badge)
      - `HeroTitle` (Text: large, Anton font)
        - `HeroTitleAccent` (Text: with text stroke)
      - `HeroLead` (Text: muted)
      - `HeroMeta` (Frame: 3-column grid, gap 10px)
        - `MetaItem` × 3 (Component: MetaBox)
          - `MetaLabel` (Text: uppercase, small)
          - `MetaValue` (Text: bold)
    - `HeroCountdown` (Frame: sticky, top 86px)
      - `CountdownCard` (Component)
        - `CountHead` (Frame: horizontal, space-between)
          - `CountTitle` (Text)
          - `PillButton` (Component)
        - `CountGrid` (Frame: grid with separators)
          - `TimeUnit` × 4 (Component)
            - `TimeNum` (Text: Anton, large)
            - `TimeLabel` (Text: uppercase, small)
          - `Separator` × 3 (Frame: 6×28px, gradient)
        - `CountFoot` (Frame: horizontal, space-between)
          - `Note` (Text)
          - `ButtonWhite` (Component)
  - `Ticker` (Frame: full width)
    - `TickerTrack` (Frame: horizontal, gap 24px)
      - `TickerItem` × 15 (Text: uppercase, Anton)

---

### 3. Apply Section

**Frame:** `ApplySection`  
**Properties:**
- Padding: `48px 0`
- Border: `2px solid rgba(255, 255, 255, 0.06)` (top)
- Background: `rgba(255, 255, 255, 0.02)`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame: vertical stack, gap 6px)
    - `SectionTitle` (Text: "Apply right away!")
    - `SectionSub` (Text: muted)
  - `Pricing` (Frame: 3-column grid, gap 14px)
    - `PriceCard` × 3 (Component: variant "default" or "ghost")
      - `PriceTitle` (Text: uppercase)
      - `PriceRange` (Text: muted, uppercase)
      - `PriceAmount` (Text: Anton, large)
      - `PriceNote` (Text: muted)
      - `ButtonBlack` (Component)
  - `Forms` (Frame: 2-column grid, gap 14px)
    - `RegistrationForm` (Component: FormCard)
      - `CardTitle` (Text: "Registration")
      - `Field` × 3 (Frame: vertical stack, gap 7px)
        - `Label` (Text: bold)
        - `Input` (Component: Input / Select)
      - `Actions` (Frame: horizontal, gap 10px)
        - `ButtonBlack` (Component)
        - `ButtonWhite` (Component)
      - `Hint` (Text: muted, small)
    - `SubmissionForm` (Component: FormCard)
      - (Same structure as RegistrationForm)

---

### 4. Why Section

**Frame:** `WhySection`  
**Properties:**
- Padding: `48px 0`
- Border: `2px solid rgba(255, 255, 255, 0.06)` (top)

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `WhyCards` (Frame: 3-column grid, gap 14px)
    - `WhyCard` × 3 (Component)
      - `WhyKicker` (Text: uppercase, small, muted)
      - `WhyBig` (Text: Anton, large, uppercase)
      - `WhyDescription` (Text: muted)

---

### 5. Event Section

**Frame:** `EventSection`  
**Properties:**
- Padding: `48px 0`
- Background: `rgba(255, 255, 255, 0.02)`
- Border: `2px solid rgba(255, 255, 255, 0.06)` (top and bottom)

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `Details` (Frame: vertical stack, gap 12px)
    - `DetailItem` × 6 (Component)
      - `DetailNo` (Text: Anton, large, "01"-"06")
      - `DetailBody` (Frame: vertical stack)
        - `DetailTitle` (Text: bold)
        - `DetailDescription` (Text: muted)

---

### 6. Rules Section

**Frame:** `RulesSection`  
**Properties:**
- Padding: `48px 0`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `RulesDownload` (Component: gradient background)
    - `RulesTitle` (Text: bold)
    - `RulesHint` (Text: muted)
    - `ButtonBlack` (Component: "Download PDF")
  - `RulesFAQ` (Frame: vertical stack, gap 10px)
    - `QAItem` × 3 (Component: Accordion)
      - `Summary` (Text: bold, with indicator)
      - `QABody` (Frame: collapsible)
        - `QAText` (Text: muted)

---

### 7. Jury Section

**Frame:** `JurySection`  
**Properties:**
- Padding: `48px 0`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `PeopleGrid` (Frame: 3-column grid, gap 14px)
    - `PersonCard` × 3 (Component)
      - `Avatar` (Frame: 46×46px, circular)
      - `PersonInfo` (Frame: vertical stack)
        - `PersonName` (Text: bold)
        - `PersonRole` (Text: uppercase, small, muted)
        - `PersonQuote` (Text: muted)

---

### 8. Partners Section

**Frame:** `PartnersSection`  
**Properties:**
- Padding: `48px 0`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `LogoGrid` (Frame: 4-column grid, gap 14px)
    - `LogoCard` × 4 (Component: placeholder)
      - `LogoText` (Text: uppercase, centered)

---

### 9. FAQ Section

**Frame:** `FAQSection`  
**Properties:**
- Padding: `48px 0`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `FAQList` (Frame: vertical stack, gap 10px)
    - `QAItem` × 4 (Component: Accordion)
      - (Same structure as Rules FAQ)

---

### 10. Contact Section

**Frame:** `ContactSection`  
**Properties:**
- Padding: `48px 0`

**Children:**
- `Container` (Frame)
  - `SectionHead` (Frame)
  - `ContactGrid` (Frame: 2-column grid, gap 14px)
    - `ContactCard` × 2 (Component: Card)
      - `CardTitle` (Text: bold)
      - `ContactInfo` (Text: muted)

---

### 11. Footer

**Frame:** `Footer`  
**Properties:**
- Padding: `22px 0`
- Background: `rgba(0, 0, 0, 0.22)`
- Border: `2px solid rgba(255, 255, 255, 0.08)` (top)

**Children:**
- `Container` (Frame)
  - `FooterInner` (Frame: horizontal, space-between)
    - `Copyright` (Text: muted)
    - `BackLink` (Text: muted, link)

---

## Reusable Components

### ButtonBlack
- **Type:** Component
- **Variants:** None
- **Properties:**
  - Background: `rgba(0, 0, 0, 0.85)`
  - Border: `2px solid rgba(255, 255, 255, 0.14)`
  - Border Radius: `16px`
  - Padding: `11px 14px`
  - Text: Uppercase, weight 900

### ButtonWhite
- **Type:** Component
- **Properties:**
  - Background: `rgba(255, 255, 255, 0.92)`
  - Border: `2px solid rgba(255, 255, 255, 0.2)`
  - (Same other properties as ButtonBlack)

### Card
- **Type:** Component
- **Properties:**
  - Border: `2px solid rgba(255, 255, 255, 0.14)`
  - Border Radius: `22px`
  - Background: `rgba(0, 0, 0, 0.18)`
  - Padding: `16px`
  - Shadow: `0 18px 0 rgba(0, 0, 0, 0.55)`

### PriceCard
- **Type:** Component
- **Variants:** Default, Ghost
- **Properties:**
  - Border: `2px dashed rgba(255, 255, 255, 0.18)` (default) or `2px solid` (ghost)
  - Background: `rgba(0, 0, 0, 0.18)` (default) or gradient (ghost)
  - (Same other properties as Card)

### FormCard
- **Type:** Component (extends Card)
- **Properties:**
  - (Inherits Card properties)
  - Contains form fields and actions

### Input
- **Type:** Component
- **Properties:**
  - Background: `rgba(0, 0, 0, 0.18)`
  - Border: `2px solid rgba(255, 255, 255, 0.12)`
  - Border Radius: `16px`
  - Padding: `12px`
  - Focus state: Border `rgba(36, 255, 209, 0.55)`, shadow `0 0 0 4px rgba(36, 255, 209, 0.16)`

### MetaBox
- **Type:** Component
- **Properties:**
  - Border: `2px solid rgba(255, 255, 255, 0.12)`
  - Border Radius: `16px`
  - Background: `rgba(0, 0, 0, 0.14)`
  - Padding: `12px`
  - Shadow: `0 10px 0 rgba(0, 0, 0, 0.45)`

### TimeUnit
- **Type:** Component
- **Properties:**
  - Border: `2px solid rgba(255, 255, 255, 0.12)`
  - Border Radius: `16px`
  - Background: `rgba(255, 255, 255, 0.03)`
  - Padding: `12px 8px`
  - Contains number and label

### WhyCard
- **Type:** Component (extends Card)
- **Properties:**
  - (Inherits Card properties)
  - Contains kicker, big text, and description

### DetailItem
- **Type:** Component
- **Properties:**
  - Layout: 2 columns (78px number, 1fr content) on desktop, 1 column on mobile
  - Border: `2px solid rgba(255, 255, 255, 0.14)`
  - Border Radius: `22px`
  - Background: `rgba(0, 0, 0, 0.18)`
  - Padding: `14px`
  - Gap: `12px`

### PersonCard
- **Type:** Component (extends Card)
- **Properties:**
  - (Inherits Card properties)
  - Layout: Horizontal flex, gap 12px
  - Contains avatar and person info

### LogoCard
- **Type:** Component
- **Properties:**
  - Border: `2px dashed rgba(255, 255, 255, 0.18)`
  - Border Radius: `22px`
  - Background: `rgba(0, 0, 0, 0.16)`
  - Min Height: `90px`
  - Centered content

### Accordion / QAItem
- **Type:** Component
- **Properties:**
  - Border: `2px solid rgba(255, 255, 255, 0.14)`
  - Border Radius: `18px`
  - Background: `rgba(0, 0, 0, 0.18)`
  - Padding: `4px 0`
  - Contains collapsible summary and body

---

## Interactive States

### Buttons
- **Default:** As specified
- **Hover:** Brightness filter `1.05` (black) or `1.03` (white)
- **Active:** Transform `translateY(1px)`

### Inputs
- **Default:** As specified
- **Focus:** Border `rgba(36, 255, 209, 0.55)`, shadow `0 0 0 4px rgba(36, 255, 209, 0.16)`

### Navigation Links
- **Default:** Muted color
- **Hover:** Background `rgba(255, 255, 255, 0.06)`, border `rgba(255, 255, 255, 0.08)`, full white color

### Accordion
- **Closed:** Summary with `▾` indicator
- **Open:** Summary with `▴` indicator, body visible

---

## Responsive Behavior

### Desktop (> 980px)
- All grids as specified (2-4 columns)
- Hero stamp: Absolute positioned
- Countdown: Sticky positioned
- Navigation: Horizontal menu visible

### Mobile (≤ 980px)
- All grids: Single column (except logos: 2 columns)
- Hero stamp: Static position
- Countdown: Static position
- Navigation: Mobile menu toggle visible
- Detail items: Single column layout

---

## Notes for Figma Implementation

1. **Auto Layout:** Use Auto Layout for all frames to maintain spacing
2. **Constraints:** Set constraints for responsive behavior
3. **Components:** Create components for reusable elements
4. **Variants:** Use component variants for different states (e.g., ButtonBlack, ButtonWhite)
5. **Effects:** Apply shadows and gradients as specified
6. **Text Styles:** Create text styles for consistency
7. **Color Styles:** Create color styles for all colors
8. **Grids:** Use Figma's grid system or auto layout for multi-column layouts
9. **Sticky Elements:** Note sticky positioning in frame properties (Figma doesn't support true sticky, but document it)
10. **Data Attributes:** Reference HTML `data-component` and `data-element` attributes for component identification

---

**End of Component Breakdown**

