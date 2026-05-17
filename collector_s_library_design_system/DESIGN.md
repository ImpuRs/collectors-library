---
name: Collector's Library Design System
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#211400'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c2700'
  on-tertiary-container: '#ad8d5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#e5c18a'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5b4217'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  gutter-grid: 12px
---

## Brand & Style
The design system is centered on the "Collector’s Library" aesthetic—a digital sanctuary for physical media enthusiasts. It balances the archival precision of a professional catalog with the inviting warmth of a personal study. 

The visual style is **Corporate / Modern** with a focus on **Minimalism**. It prioritizes content (cover art and metadata) through generous white space, structured grids, and a sophisticated color palette. The goal is to make the user feel like a curator, providing a sense of order, permanence, and pride in their collection. Every interaction should feel intentional and high-quality, mirroring the tactile satisfaction of placing a book on a shelf.

## Colors
The palette is anchored by a sophisticated navy blue, providing an authoritative and timeless foundation. The primary background is a clean, crisp white to ensure that colorful media covers remain the focal point.

Soft grey is utilized for secondary UI elements, such as container backgrounds and dividers, to create subtle grouping without adding visual noise. A specific set of vibrant semantic accents is used to categorize media types:
- **Emerald Green:** Books and Manga.
- **Ruby Red:** DVDs and Blu-rays.
- **Sapphire Blue:** CDs and Vinyl.

Use these accents sparingly for badges, status indicators, and category-specific progress bars to maintain a professional, organized atmosphere.

## Typography
Inter is the sole typeface for this design system, chosen for its exceptional readability on mobile screens and its neutral, systematic character. 

The type hierarchy is designed to mirror archival labels. **Display** styles are used for collection totals and main titles. **Headlines** define sections within a library view (e.g., "Recently Added"). **Body** styles handle metadata like author names, directors, and descriptions. **Labels** are utilized for media type badges and metadata headers (e.g., "ISBN", "PUBLISHER"), often appearing in uppercase with increased letter spacing to evoke a "cataloged" feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for library views to ensure media covers are displayed with consistent aspect ratios. 

On mobile, the primary layout is a 2-column or 3-column grid for "Gallery" views, and a single-column list for "Detail" views. 
- **Margins:** 16px lateral margins on all mobile screens.
- **Gutters:** 12px spacing between grid items to balance density and clarity.
- **Rhythm:** An 8px baseline grid governs vertical rhythm, ensuring that text and components align predictably.

For tablet and desktop, the grid expands to 4 or 6 columns, maintaining the same 12px gutter to preserve the "dense library" aesthetic.

## Elevation & Depth
Visual hierarchy is achieved through **Tonal Layers** combined with **Ambient Shadows**. 

The background layer is the base white. Secondary surfaces, such as search bars or category filters, use the soft grey (#F1F3F5) to sit slightly "below" the main content cards. 

**Media Cards** use a subtle, highly diffused shadow (0px 4px 12px, 5% opacity Navy) to appear slightly lifted. This creates a tactile sense of the items being physical objects sitting on a shelf. High-priority interactive elements like Floating Action Buttons (FABs) for "Add New Item" use a slightly more pronounced shadow to indicate higher elevation.

## Shapes
The design system uses a **Rounded** shape language to make the professional environment feel approachable and modern. 

The standard corner radius for primary UI components (Buttons, Input Fields, Cards) is **12px (0.75rem)**. Small elements like chips and badges use a more aggressive rounding (16px or full pill) to distinguish them from structural components. Media covers themselves should also have a subtle 4px–8px radius to prevent them from feeling too "sharp" against the softer UI.

## Components

### Buttons
- **Primary:** Solid Navy (#1A2B48) with white text. 12px border radius.
- **Secondary:** Soft Grey (#F1F3F5) with Navy text.
- **Ghost:** No fill, Navy text and 1px border.

### Media Cards
The core of the system. Each card features a high-quality cover image with a 12px radius. Metadata (Title, Year) is placed directly below the image. A small, color-coded corner badge or thin bottom strip indicates the media type (Ruby for Movies, etc.).

### Chips & Badges
Used for genres and tags. They use a light tint of the primary or accent colors (10% opacity) with high-contrast text.

### Input Fields
Clean, 12px rounded borders with a 1px soft grey stroke. On focus, the stroke transitions to Primary Navy. Use clear placeholder text and leading icons for search.

### List Items
For dense browsing. Features a small thumbnail (48px) on the left, primary metadata in the center, and a chevron or status icon on the right. Separated by a 1px soft grey divider.

### Bottom Navigation
A clean white bar with a subtle top shadow. Icons are line-style for a modern look, filling with the Primary Navy color when active.