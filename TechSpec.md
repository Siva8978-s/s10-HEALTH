# S10 Health Website - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submit, navigation | Orange theme, custom sizes |
| Card | Service cards, team cards, job cards | Custom shadows, hover effects |
| Input | Contact form fields | Orange focus ring |
| Textarea | Contact form message | Orange focus ring |
| Badge | Section labels, tags | Orange/gray variants |
| Sheet | Mobile navigation drawer | Slide from right |
| Separator | Visual dividers | Custom colors |

### Third-Party Components

None required - all components can be built with shadcn/ui + custom components.

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Navbar | Fixed navigation with scroll effect | `src/components/Navbar.tsx` |
| MobileNav | Mobile navigation drawer | `src/components/MobileNav.tsx` |
| HeroSection | Main hero with animations | `src/sections/HeroSection.tsx` |
| AboutSection | Company story and values | `src/sections/AboutSection.tsx` |
| ServicesSection | Service cards grid | `src/sections/ServicesSection.tsx` |
| StatsSection | Animated statistics | `src/sections/StatsSection.tsx` |
| TeamSection | Team member cards | `src/sections/TeamSection.tsx` |
| CareersSection | Job listings | `src/sections/CareersSection.tsx` |
| ContactSection | Contact form | `src/sections/ContactSection.tsx` |
| Footer | Site footer | `src/sections/Footer.tsx` |
| AnimatedCounter | Number count-up animation | `src/components/AnimatedCounter.tsx` |
| ScrollReveal | Scroll-triggered fade-in wrapper | `src/components/ScrollReveal.tsx` |
| ServiceCard | Individual service card | `src/components/ServiceCard.tsx` |
| TeamCard | Team member card | `src/components/TeamCard.tsx` |
| JobCard | Job listing card | `src/components/JobCard.tsx` |
| ValueItem | Company value with icon | `src/components/ValueItem.tsx` |
| SectionLabel | Orange label with line | `src/components/SectionLabel.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + initial/animate states | Low |
| Navbar scroll effect | React hooks | useState + useEffect with scroll listener | Low |
| Hero text stagger | Framer Motion | staggerChildren + delayChildren | Medium |
| Hero floating shapes | Framer Motion | animate with repeat: Infinity | Low |
| CTA button pulse | Framer Motion | animate scale with repeat | Low |
| Scroll reveal (fade up) | Framer Motion | whileInView + viewport settings | Medium |
| Card hover lift | CSS + Framer Motion | whileHover transform | Low |
| Stats counter | Custom hook | useCountUp with Intersection Observer | Medium |
| Team card image zoom | CSS | transform: scale on hover | Low |
| Link underline | CSS | ::after pseudo-element width transition | Low |
| Mobile menu slide | Framer Motion | AnimatePresence + x animation | Medium |
| Form focus glow | CSS | box-shadow transition on focus | Low |
| Button hover | CSS + Framer Motion | background + transform | Low |
| Parallax image | Framer Motion | useScroll + useTransform | Medium |

---

## Animation Library Choices

### Primary: Framer Motion

**Rationale:**
- Native React integration
- Declarative API
- Built-in scroll animations (whileInView)
- AnimatePresence for mount/unmount
- Excellent TypeScript support
- Good performance

**Use for:**
- All scroll-triggered animations
- Page load animations
- Hover/tap interactions
- Mobile menu transitions
- Staggered reveals

### Secondary: CSS Transitions/Animations

**Use for:**
- Simple hover effects
- Link underlines
- Form focus states
- Color transitions

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-image.jpg
│   │   ├── about-image.jpg
│   │   ├── team-1.jpg
│   │   ├── team-2.jpg
│   │   ├── team-3.jpg
│   │   └── team-4.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── MobileNav.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── JobCard.tsx
│   │   ├── ValueItem.tsx
│   │   └── SectionLabel.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── CareersSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── components.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies

### Core (Auto-installed)
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

### Additional Required
```bash
npm install framer-motion lucide-react
```

### Already Included
- clsx
- tailwind-merge
- class-variance-authority

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: {
    DEFAULT: '#F7931E',
    dark: '#E8850A',
    light: '#FFA94D',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    400: '#9CA3AF',
    600: '#4B5563',
    800: '#1F2937',
    900: '#111827',
  }
}
```

---

## Animation Configuration

### Framer Motion Variants

```typescript
// Fade up animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Card hover
const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: { 
    y: -8, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};
```

---

## Responsive Breakpoints

```javascript
// Tailwind default breakpoints
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px', // Extra large
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Implement lazy loading
   - Provide appropriate sizes

2. **Animation Performance**
   - Use transform and opacity only
   - Add will-change sparingly
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load below-fold sections if needed
   - Optimize bundle size

4. **Accessibility**
   - ARIA labels on interactive elements
   - Keyboard navigation support
   - Focus visible states
   - Color contrast compliance

---

## Build Commands

```bash
# Development
cd /mnt/okcomputer/output/app && npm run dev

# Production build
cd /mnt/okcomputer/output/app && npm run build

# Preview build
cd /mnt/okcomputer/output/app && npm run preview
```

---
