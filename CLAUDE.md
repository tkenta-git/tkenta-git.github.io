# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Kenta Tanaka showcasing data visualization work. The site is configured for static export to GitHub Pages with embedded Observable notebooks and interactive D3.js visualizations.

## Development Commands

```bash
# Development server
npm run dev

# Build for production (static export)
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture

### Static Site Configuration
- Configured with `output: 'export'` in next.config.js for GitHub Pages deployment
- Images are unoptimized for static hosting compatibility
- Japanese language support with `lang="ja"` in layout

### Component Structure
- **Header**: Global navigation component with logo and main nav links (Work, About, Contact)
- **Layout**: Root layout with Header component included globally
- App Router structure with pages in `src/app/` directory

### Data Visualization Strategy
The portfolio uses a hybrid approach for data visualizations:

1. **Embedded Observable Notebooks**: Primary visualizations are embedded as iframes from Observable HQ (@kenta-tanaka profile)
   - SFC Hello Cycling data
   - Shannon Diversity Index Calculator
   - Medical Expenses in Japan

2. **Interactive D3.js Components**: Custom React components with D3.js for enhanced interactivity
   - Located in `/work/observable/` route
   - Uses client-side rendering with 'use client' directive
   - Implements responsive design with window resize handlers
   - TypeScript interfaces for data structures (Species interface)

### Key Technical Patterns
- **D3.js Integration**: Uses useRef hooks for DOM manipulation and useEffect for D3 lifecycle management
- **Responsive Design**: Components include resize event handlers for responsive visualizations
- **State Management**: Local React state for interactive components (Shannon diversity calculator)
- **TypeScript**: Strict typing with interfaces for data structures and props

### Styling
- Global CSS in `src/app/globals.css`
- Tailwind CSS configured but minimal usage observed
- Custom CSS classes following BEM-like naming (shannon-*, notebook-container, hero, etc.)
- Inline styles for component-specific styling

### File Structure Notes
- `@/*` path alias configured for `./src/*` imports
- Empty Layout.tsx component in components/ directory (unused)
- Mixed Japanese and English content throughout the application