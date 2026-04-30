# REW Bakery Machines - Website Clone

## Project Overview
A pixel-perfect clone of an industrial bakery machinery website built with React, featuring a professional dark theme with golden accents, fully responsive design, and smooth animations.

## 🎨 Design Features

### Color Scheme
- **Primary Background**: #0a0a0a (Deep Black)
- **Secondary Background**: #121212, #1a1a1a (Dark Grays)
- **Accent Color**: #c9923f, #d4a574 (Golden/Bronze)
- **Text**: White with varying opacity levels

### Sections Implemented

1. **Header/Navigation**
   - Sticky header with blur effect on scroll
   - REW Bakery Machines logo
   - Desktop navigation: Home, Products, Clients, About, Contact
   - GST number display
   - "Get Quote" CTA button
   - Mobile hamburger menu with smooth transitions

2. **Hero Section**
   - Full-screen hero with industrial bakery background
   - Large typography: "Industrial Bakery Machinery"
   - Subtitle: "Built for Performance & Scale"
   - Two CTA buttons: "Get Quote" and "View Products"
   - Badge indicators: "Made in India" and "100+ Installations"
   - Animated scroll indicator

3. **Our Presence Across India**
   - Interactive India map with SVG visualization
   - State markers with animation effects
   - Client logo grid (9 major brands)
   - Stats badges (Made in India, 100+ Installations, Pan India Presence)

4. **Products Section**
   - 5 product cards with hover effects:
     - Industrial Oven
     - Rotary Rack Oven
     - Rusk Making Machine
     - Spiral Mixer
     - Belt Conveyor
   - Professional product images
   - Feature lists for each product
   - "View Details" buttons

5. **Get in Touch Section**
   - Contact information cards (Phone, Email, Address)
   - Prominent "Request a Quote Today" CTA card with gradient
   - Direct "Call Now" and "Email Us" buttons
   - Social media links (Instagram, Facebook, LinkedIn)
   - **Note**: Contact form removed as per requirements - users contact directly via phone/email/social media

6. **Footer**
   - Company description
   - Quick links navigation
   - Contact information
   - GST number
   - Social media icons
   - Copyright notice

## ✨ Key Features

### Responsive Design
- **Desktop (1920px+)**: Full layout with 5-column product grid
- **Laptop (1440px)**: Optimized spacing
- **Tablet (768px)**: 2-3 column layouts
- **Mobile (375px)**: Single column with hamburger menu

### Interactions & Animations
- Smooth scroll navigation between sections
- Hover effects on all interactive elements
- Product card scale and overlay effects
- Navigation underline animations
- Pulse animations on badges and map markers
- Fade-in animations for hero content
- Scroll indicator bounce animation

### Performance Optimizations
- Custom scrollbar styling
- Optimized images from Unsplash/Pexels
- CSS transitions using transforms (GPU-accelerated)
- Lazy loading ready
- Backdrop blur effects for modern feel

## 🛠 Technical Stack

### Frontend
- **Framework**: React 19.0.0
- **Routing**: React Router DOM 7.5.1
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React 0.507.0
- **Build Tool**: Craco

### Component Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── PresenceSection.jsx
│   ├── ProductsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── pages/
│   └── HomePage.jsx
└── App.js
```

## 🎯 Design Principles Followed

✅ **NO AI emojis** - Used Lucide React icons throughout
✅ **NO dark gradients** - Used mild, professional color gradients
✅ **Professional fonts** - Used system fonts optimized for readability
✅ **Micro-animations** - Added hover states and transitions
✅ **Depth & layers** - Implemented shadows, borders, and overlays
✅ **Generous whitespace** - 2-3x normal spacing for premium feel
✅ **60fps animations** - CSS transform-based animations
✅ **Color theory** - Proper contrast between interactive elements

## 📱 Mobile Responsiveness

All sections adapt seamlessly:
- Hamburger menu on mobile devices
- Stacked layouts for better readability
- Touch-optimized buttons and links
- Optimized image sizes
- Smooth scroll behavior maintained

## 🔗 Contact Information

- **Phone**: +91 80775 58106
- **Email**: rahulengineering3@gmail.com
- **Address**: A-42, Industrial Area, Meerut, UP, India
- **GST**: 09ACSPC3B991

## 🌐 Live Preview

Website URL: https://config-driven-web-1.preview.emergentagent.com

## ✅ Testing Completed

- ✓ Desktop navigation and scrolling
- ✓ Mobile hamburger menu functionality
- ✓ Tablet responsiveness
- ✓ Product hover effects
- ✓ CTA button scroll functionality
- ✓ Contact links (phone, email)
- ✓ Social media links
- ✓ All interactive elements

## 📝 Notes

- **Contact Form Removed**: As requested, the inquiry form has been replaced with direct contact options (phone, email, social media)
- **Client Logos**: Using text-based placeholders for major Indian brands (Britannia, Parle, etc.)
- **Images**: Professional industrial bakery machinery images sourced from Unsplash and Pexels
- **Config-Driven**: All content is easily modifiable from component files
- **Production Ready**: Optimized for performance and SEO

## 🚀 Future Enhancements (Optional)

- Add real client logos from brand assets
- Implement product detail pages
- Add case studies section
- Integrate analytics
- Add multilingual support (Hindi, English)
- Implement WhatsApp direct messaging
- Add testimonials slider
- Product inquiry form with email integration
