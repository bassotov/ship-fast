# ShipFast - Setup Inventory

### Pre-built repository to kick-start any Web project fast. Inspired by @marclou

## 📁 Project Structure
```
ship-fast/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── test-components/page.tsx
│   │   └── globals.css
│   └── components/ui/ (all shadcn components)
├── extension/ (prepared for Phase 2)
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .gitignore
```

## 🎯 Core Project Setup

### Base Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling (using new @import syntax)
- **ESLint** - Code linting

### Project Configuration
- ✅ App Router enabled
- ✅ `src/` directory structure
- ✅ Import alias `@/*`
- ✅ Dark mode support
- ✅ Tailwind CSS with custom purple theme
- ✅ OKLCH color format for modern color management

## 📦 Installed Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "html2canvas": "latest",
    "html-to-image": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "class-variance-authority": "latest",
    "lucide-react": "latest",
    "zustand": "latest",
    "tailwindcss-animate": "latest"
  }
}
```

### Data Visualization & Tables
- **@tanstack/react-table** - Advanced data tables
- **recharts** - Chart library for graphs
- **date-fns** - Date formatting utilities
- **@tanstack/react-query** - Data fetching (optional)

### Development Dependencies
- **@types/node** - Node.js TypeScript types

## 🎨 shadcn/ui Components Installed

### Core UI Components
- ✅ accordion
- ✅ alert
- ✅ alert-dialog
- ✅ aspect-ratio
- ✅ avatar
- ✅ badge
- ✅ button
- ✅ breadcrumb
- ✅ calendar
- ✅ card
- ✅ carousel
- ✅ checkbox
- ✅ collapsible
- ✅ command
- ✅ context-menu
- ✅ dialog
- ✅ drawer
- ✅ dropdown-menu
- ✅ form
- ✅ hover-card
- ✅ input
- ✅ input-otp
- ✅ label
- ✅ menubar
- ✅ navigation-menu
- ✅ pagination
- ✅ popover
- ✅ progress
- ✅ radio-group
- ✅ resizable
- ✅ scroll-area
- ✅ select
- ✅ separator
- ✅ sheet
- ✅ skeleton
- ✅ slider
- ✅ **sonner** (toast notifications - replaced deprecated toast)
- ✅ switch
- ✅ table
- ✅ tabs
- ✅ textarea
- ✅ toggle
- ✅ toggle-group
- ✅ tooltip

### Chart Components
- ✅ chart (base component)
- ✅ Various chart patterns (area, bar, line, pie, radar, radial)
- ✅ Chart tooltips and formatting options

### Complex Blocks/Patterns
- ✅ data-table (TanStack Table integration)
- ❓ sidebar-03 (attempted)
- ❓ login-03 (attempted)
- ❓ calendar-01 (attempted)
- ❓ calendar-04 (attempted)

## 🎨 Theme Configuration

### Color Scheme
- **Primary**: Purple (OKLCH format)
- **Secondary**: Zinc/Gray
- **Accent**: Purple (matching primary)
- **Destructive**: Red
- **Base**: Zinc color palette
- **Dark mode**: Fully configured

### CSS Variables System
- Using Tailwind CSS v4's new `@theme inline` directive
- OKLCH color space for better color accuracy
- CSS custom properties for all components
- Responsive radius system

## 📁 Created Files

### Configuration Files
- ✅ `components.json` - shadcn configuration
- ✅ `tailwind.config.ts` - Tailwind configuration
- ✅ `globals.css` - Global styles with theme
- ✅ `.gitignore` - Git ignore rules
- ✅ `.env.local` - Environment variables

### Library Files
- ✅ `src/app/lib/gradients.ts` - Gradient presets
- ✅ `src/app/lib/utils.ts` - Utility functions
- ✅ `src/app/types/index.ts` - TypeScript types

### Test Pages
- ✅ `src/app/test-components/page.tsx` - Component testing page
- ✅ `src/app/test-tweet/page.tsx` - Twitter oEmbed API test

### Component Templates (Prepared)
- 📝 `TweetInput.tsx` (placeholder created)
- 📝 `TweetCanvas.tsx` (placeholder created)
- 📝 `ControlPanel.tsx` (placeholder created)
- 📝 `ExportButtons.tsx` (placeholder created)

## 🚀 Chrome Extension Preparation

### Extension Structure (Phase 2)
```
extension/
├── manifest.json (created)
├── src/
├── public/icons/
└── dist/
```

### Manifest Configuration
- ✅ Manifest V3 setup
- ✅ Permissions configured
- ✅ Content script placeholders
- ✅ Host permissions for Twitter/X

## 🛠️ Development Tools

### Package Management
- **npm** - Package manager
- **npx** - Package runner

### Recommended VS Code Extensions
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ESLint
- Prettier (optional)

### CLI Tools
- **Vercel CLI** - For deployment (to be installed)
- **shadcn CLI** - Component installation

## 📝 Next Steps Checklist

### Immediate Priorities
- [ ] Test Twitter oEmbed API endpoint
- [ ] Validate html2canvas with Twitter HTML
- [ ] Build core screenshot functionality
- [ ] Implement gradient backgrounds
- [ ] Add export features (PNG + clipboard)

### Phase 1: Website (Days 1-5)
- [ ] Tweet fetching via oEmbed
- [ ] Canvas rendering
- [ ] Customization controls
- [ ] Export functionality
- [ ] Deploy to Vercel

### Phase 2: Extension (Days 6-7)
- [ ] Content script implementation
- [ ] Popup UI
- [ ] Keyboard shortcuts
- [ ] Context menu integration

### Phase 3: Polish (Days 8-10)
- [ ] Performance optimization
- [ ] Error handling
- [ ] CWS assets preparation
- [ ] Submit to Chrome Web Store

## 🔧 Common Commands

```bash
# Development
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server

# Component Management
npx shadcn@latest add [component-name]  # Add shadcn component

# Git
git add .
git commit -m "message"
git push origin main

# Testing URLs
http://localhost:3000                    # Main app
http://localhost:3000/test-components    # Component test page
http://localhost:3000/test-tweet        # Tweet API test
```

## 🎯 Project Goals Alignment

✅ **Website-first approach** - All web dependencies ready
✅ **Modern stack** - Latest Next.js, Tailwind v4
✅ **Component library** - Full shadcn/ui suite installed
✅ **Data visualization** - Charts and tables ready
✅ **Type safety** - TypeScript configured
✅ **Purple branding** - Theme configured
✅ **Fast development** - All tools ready for rapid shipping

---

*Last Updated: Current Session*
*Ready for: Day 1 Development*