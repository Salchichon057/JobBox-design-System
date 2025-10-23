# Design System - Color Documentation

Complete color system documentation for JobBox application.

## Table of Contents

- [Color Palette](#color-palette)
- [Usage](#usage)
- [File Structure](#file-structure)
- [CSS Variables](#css-variables)

## Color Palette

### Primary Colors

Three main colors used across the design system:

- **Lavender** - `#c69fff` - Primary brand color
- **Sky Blue** - `#4ea5ff` - Secondary brand color  
- **Mint Green** - `#3dffb3` - Accent color

### Secondary Colors

Supporting colors for variety and visual interest:

- **Yellow** - `#ffe63d`
- **Pink** - `#ffc3c0`
- **Blue Pastel** - `#a8d5f8`

### Semantic Colors

Colors with specific meanings for UI feedback:

- **Success** - `#10b981` - Positive actions and confirmations
- **Warning** - `#f59e0b` - Cautionary messages
- **Error** - `#ef4444` - Errors and destructive actions
- **Info** - `#3b82f6` - Informational messages

### Gray Scale

Ten-step gray scale from darkest to lightest:

- **Gray 900** - `#212121` - Darkest
- **Gray 800** - `#424242`
- **Gray 700** - `#616161`
- **Gray 600** - `#757575`
- **Gray 500** - `#9e9e9e`
- **Gray 400** - `#bdbdbd`
- **Gray 300** - `#e0e0e0`
- **Gray 200** - `#eeeeee`
- **Gray 100** - `#f5f5f5`
- **Gray 50** - `#fafafa` - Lightest

## Usage

### In HTML

Open `index.html` in a web browser to view the complete color documentation with interactive examples.

### In CSS

All colors are available as CSS custom properties:

```css
/* Primary Colors */
background-color: var(--color-primary-lavender);
color: var(--color-primary-sky-blue);
border-color: var(--color-primary-mint-green);

/* Secondary Colors */
background-color: var(--color-secondary-yellow);
color: var(--color-secondary-pink);
border-color: var(--color-secondary-blue-pastel);

/* Semantic Colors */
background-color: var(--color-success);
color: var(--color-warning);
border-color: var(--color-error);
background-color: var(--color-info);

/* Gray Scale */
background-color: var(--gray-900);
color: var(--gray-800);
border-color: var(--gray-50);
```

## File Structure

```
JobBox/
├── index.html              # Main documentation page
├── css/
│   ├── variables.css       # Color definitions and design tokens
│   ├── reset.css           # CSS reset
│   ├── layout.css          # Layout styles
│   ├── buttons.css         # Button components
│   ├── cards.css           # Card components
│   ├── forms.css           # Form components
│   └── components.css      # Additional components
├── js/
│   └── main.js             # Interactive features
└── README.md               # This file
```

## CSS Variables

### Color Variables

Primary colors:
```css
--color-primary-lavender: #c69fff;
--color-primary-sky-blue: #4ea5ff;
--color-primary-mint-green: #3dffb3;
```

Secondary colors:
```css
--color-secondary-yellow: #ffe63d;
--color-secondary-pink: #ffc3c0;
--color-secondary-blue-pastel: #a8d5f8;
```

Semantic colors:
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

Gray scale:
```css
--gray-900: #212121;
--gray-800: #424242;
--gray-700: #616161;
--gray-600: #757575;
--gray-500: #9e9e9e;
--gray-400: #bdbdbd;
--gray-300: #e0e0e0;
--gray-200: #eeeeee;
--gray-100: #f5f5f5;
--gray-50: #fafafa;
```

All color definitions are located in `css/variables.css`.
