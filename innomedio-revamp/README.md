# Innomedio Website Revamp

A modern, conversion-oriented revamp of the Innomedio website while maintaining the existing brand identity.

## Overview

This revamp focuses on:
- **Clarity**: Quickly clarifying what Innomedio does with fewer click-throughs
- **Trust & Authority**: Showcasing case studies, partners, and certifications
- **Conversion**: Appointment booking, lead bot, and configurator features
- **Modern Feel**: Dynamic and modern design without abandoning brand identity

## Structure

The homepage follows this exact order:

1. **Header** - Company video, headline, subtitle, and CTAs
2. **Case Studies** - Most recent projects
3. **Client Logos** - Static grid (no slider)
4. **Services** - Clear categorization with configurator CTA
5. **Why Innomedio?** - Trust elements and badges
6. **Working Method** - Step-by-step workflow
7. **Technology Logos** - Partner technologies
8. **News Items** - Most recent insights
9. **FAQ** - Accordion-style questions
10. **CTA Banner** - Appointment booking
11. **Footer** - Partner badges and certifications

## Features

### Conversion Elements

- **Appointment Booking Modal**: Schedule a meeting directly from the site
- **Lead Bot**: Interactive chat interface for quick inquiries
- **Configurator**: Interactive tool to discover the ideal solution
- **Newsletter Signup**: Stay updated with latest insights

### Interactive Components

- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Accordion FAQ section
- Modal dialogs for forms
- Toast notifications for user feedback
- Scroll animations for visual interest

## Files

- `index.html` - Main HTML structure
- `styles.css` - Modern CSS with brand-preserving styling
- `script.js` - Interactive functionality and form handling

## Assets Needed

The following assets should be added to the project:

### Images
- `assets/innomedio-video.mp4` - Company video for hero section
- `assets/innomedio-hero.jpg` - Fallback hero image
- `assets/cases/*.jpg` - Case study images
- `assets/clients/*.svg` - Client logo files
- `assets/tech/*.svg` - Technology partner logos
- `assets/news/*.jpg` - News article images
- `assets/partners/*.svg` - Partner certification badges

### Recommended Structure
```
innomedio-revamp/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── innomedio-video.mp4
    ├── innomedio-hero.jpg
    ├── cases/
    ├── clients/
    ├── tech/
    ├── news/
    └── partners/
```

## Customization

### Colors
The color scheme can be adjusted in `styles.css` via CSS variables:
- `--primary`: Main brand color
- `--accent`: Accent color for CTAs
- `--text`: Main text color
- `--bg`: Background color

### Content
All content is easily editable in `index.html`. The structure is semantic and well-commented.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Next Steps

1. Add actual images and video assets
2. Connect forms to backend API
3. Integrate with CMS for news/blog posts
4. Add analytics tracking
5. Implement A/B testing for conversion optimization

## Notes

- All forms currently log to console - connect to your backend
- Modals use native HTML5 `<dialog>` element
- Smooth scrolling and animations enhance UX
- Accessibility features included (ARIA labels, skip links)

