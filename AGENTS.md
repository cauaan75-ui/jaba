# Bar do Jaba - Project Notes

## Development Summary

This is a complete professional website for Bar do Jaba, a Brazilian self-service restaurant specializing in barbecue (churrasco).

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel/Netlify

## Project Structure

All components are located in the `components/` directory, with configuration centralized in `lib/config.ts`.

## Key Design Decisions

### Component Architecture

- All interactive components marked with `"use client"` directive
- Server components used where possible for performance
- Configuration-driven approach for easy content updates

### Color Scheme

- Charcoal (#171717) - Primary dark color
- Wood Brown (#513625) - Secondary dark
- Ember Orange (#E87524) - Accent/CTA buttons
- Cream (#F3E8D5) - Background sections
- Warm White (#FFFDF8) - Main background
- Green (#4CAF50) - Success/WhatsApp elements

### Configuration System

All restaurant data is centralized in `lib/config.ts`:
- Contact information
- Address and location
- Operating hours
- Pricing model
- Menu items
- Promotions
- Gallery images
- Service availability

## Important Notes for Future Development

### Configuration

Before publishing, the following fields in `lib/config.ts` MUST be filled:
- WhatsApp number (with country code)
- Complete address
- Map coordinates (lat/lng)
- Operating hours
- Pricing (per kg or per person)
- Real menu items
- Real photos

### Images

Currently using placeholder images from Unsplash. Replace with:
- Real restaurant photos in `public/images/gallery/`
- Real menu item photos in `public/images/menu/`
- Hero background image

### Conditional Rendering

Several sections only appear when configured:
- Promotions section (only when `promotionsConfig.active = true`)
- Reservation form (only when `services.reservations.available = true`)
- Delivery section (shows message if not available)
- Contact options (only show when data is filled)

### Mobile Features

- Floating WhatsApp button (bottom-right)
- Mobile bottom navigation bar (Cardápio, WhatsApp, Localização)
- Responsive menu with hamburger toggle
- Touch-friendly buttons and spacing

## Build and Deployment

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Platform-Specific Notes

Added `allowedDevOrigins: ["127.0.0.1"]` to `next.config.ts` for browser preview compatibility during development.

## SEO and Metadata

- Title: "Bar do Jaba | Self-Service com Churrasco"
- Description configured in layout.tsx
- Open Graph tags for social sharing
- Semantic HTML structure

## Known Issues/Limitations

1. **Map Integration:** Currently requires manual coordinates. Could be enhanced with Google Maps API for dynamic address lookup.
2. **Reviews:** Static configuration. Could integrate with Google Maps API for real-time reviews.
3. **Reservations:** Currently WhatsApp-only. Could be extended with a backend system.
4. **Menu:** Client-side only. Could be moved to a CMS or database for easier management.

## Future Enhancements

1. **Admin Panel:** Create a protected admin interface for managing menu, promotions, and content
2. **Database Integration:** Move configuration to a database for dynamic updates
3. **Payment Integration:** Add online payment for delivery orders
4. **Real-time Availability:** Show if restaurant is currently open based on hours
5. **Multi-language Support:** Add English version for tourists
6. **Booking System:** Implement real reservation system with calendar

## Testing Checklist

Before publishing:
- [ ] Fill all configuration fields in lib/config.ts
- [ ] Add real images to public/images/
- [ ] Test WhatsApp integration
- [ ] Test map navigation
- [ ] Test on mobile devices
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all links work
- [ ] Check responsive design at different breakpoints
- [ ] Test form validation
- [ ] Verify SEO metadata

## File Organization

- `lib/config.ts` - Single source of truth for all restaurant data
- `lib/types.ts` - TypeScript type definitions
- `components/` - All React components
- `app/` - Next.js app directory with routing
- `public/` - Static assets

## Component Dependencies

Most components depend on `lib/config.ts` for data. The main page (`app/page.tsx`) imports all components in order.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Browser Preview

During development, browser preview is available at http://localhost:3000

## Configuration Guide

See `CONFIGURACAO.md` for detailed configuration instructions in Portuguese.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
