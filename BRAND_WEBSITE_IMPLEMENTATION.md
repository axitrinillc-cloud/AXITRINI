# Axitrini Brand Website - Implementation Guide

## Overview

A premium, one-page brand website for Axitrini that builds trust, tells the brand story, and redirects visitors to Amazon product listings. This is a marketing/branding site, not an e-commerce platform.

## Access the Website

The brand website is available at: **`/brand`**

Visit: `http://localhost:3000/brand` (development) or your production URL + `/brand`

## Key Features

✅ **Premium, minimal design** - Apple-style aesthetics  
✅ **Single-page layout** - Smooth scrolling sections  
✅ **Trust-building copy** - Engaging storytelling  
✅ **Clear Amazon CTAs** - Prominent redirect buttons  
✅ **Mobile-responsive** - Works perfectly on all devices  
✅ **SEO optimized** - Proper meta tags and structure  

## Customization Required

### 1. Amazon Store Links

Replace these placeholder URLs in `/app/brand/page.tsx`:

**Find and replace:**
- `YOUR_AMAZON_STORE_ID` → Your actual Amazon Store ID
- `YOUR_SELLER_ID` → Your Amazon Seller ID

**Example URLs:**
- Amazon Store: `https://www.amazon.com/stores/page/ABC123XYZ`
- Seller Products: `https://www.amazon.com/s?me=A1B2C3D4E5F6G7`

**Locations to update:**
1. Hero section - "Shop on Amazon" button
2. Marketplace section - "Visit Our Amazon Store" button
3. Marketplace section - "Browse Products" button
4. BrandNavbar component - "Shop on Amazon" button

### 2. Contact Email

Update the contact email in:
- Footer section: `contact@axitrini.com` → Your actual email

### 3. Amazon Logo (Optional)

If you want to add the Amazon logo to the marketplace section:

1. **Get permission**: Ensure compliance with Amazon's brand guidelines
2. **Add image**: Place Amazon logo in `/public/amazon-logo.svg` or `.png`
3. **Update code**: Add image tag in the marketplace section

**Amazon Brand Guidelines**: https://advertising.amazon.com/help/legal/brand-guidelines

### 4. Legal Pages

Create these pages if they don't exist:
- `/privacy` - Privacy Policy page
- `/terms` - Terms of Service page
- `/contact` - Contact page

Or update the footer links to point to external pages.

## Design Customization

### Colors

The brand uses your existing design system:
- **Primary Blue**: `#0ea5e9` (primary-600)
- **Success Green**: `#22c55e` (success-600)
- **Neutrals**: White, light gray, dark gray

To change colors, edit `tailwind.config.ts` or update the color classes in the brand page.

### Typography

- **Headlines**: Large, bold (text-6xl to text-8xl)
- **Body**: Clean, readable (text-xl, leading-relaxed)
- **Font**: Inter (system fallback)

### Spacing

- Generous padding: `py-24 md:py-32` for sections
- Large margins between elements
- Breathing room around text

## Image Recommendations

### Hero Section
- **Style**: Minimal product photography
- **Background**: Clean white or neutral
- **Aesthetic**: Apple-style, premium feel
- **Size**: 1920x1080 or larger (will be optimized)

### Brand Story Section
- **Style**: Lifestyle product photography
- **Context**: Products in natural use settings
- **Quality**: High-resolution, professional

### How We Operate Section
- **Style**: Icon-based (already using Lucide icons)
- **Alternative**: Minimal illustrations or product development journey images

### Marketplace Section
- **Style**: Product grid mockup or Amazon-style listing preview
- **Optional**: Amazon logo (with permission)

## SEO Optimization

The page includes:
- ✅ Proper meta title and description
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1, h2, h3)

**To enhance further:**
1. Add structured data (JSON-LD) for organization
2. Add alt text to any images you add
3. Consider adding a sitemap entry

## Analytics Setup

### Track CTA Clicks

Add analytics tracking to Amazon buttons:

```typescript
// Example with Google Analytics
const handleAmazonClick = () => {
  gtag('event', 'click', {
    event_category: 'CTA',
    event_label: 'Shop on Amazon',
    value: 1
  })
}
```

### Track Scroll Depth

Monitor how far users scroll to understand engagement.

## Performance

The page is optimized for:
- ✅ Fast loading (minimal dependencies)
- ✅ Smooth animations (CSS-only)
- ✅ Mobile performance
- ✅ SEO-friendly

## Testing Checklist

Before going live:

- [ ] All Amazon links work correctly
- [ ] Contact email is correct
- [ ] Legal page links work
- [ ] Mobile responsive (test on phone/tablet)
- [ ] All CTAs are clickable and functional
- [ ] Smooth scrolling works
- [ ] Images load properly (if added)
- [ ] SEO meta tags are correct
- [ ] Analytics tracking is set up
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

## Content Updates

### To Update Copy

Edit `/app/brand/page.tsx` - all text content is in this file.

### To Add Sections

Follow the existing pattern:
1. Create a new `<section>` with appropriate padding
2. Use consistent typography classes
3. Maintain spacing consistency

## Alternative: Standalone Version

If you want this as a completely standalone site (separate from the e-commerce app):

1. Create a new Next.js project
2. Copy `/app/brand` folder
3. Copy required components (`Button`, `Card`)
4. Copy design system files (`tailwind.config.ts`, `globals.css`)

## Support

For questions or issues:
- Check the main README.md
- Review the BRAND_WEBSITE_COPY.md for content reference
- Check Next.js documentation for framework-specific questions

## Next Steps

1. ✅ Replace Amazon placeholder URLs
2. ✅ Update contact email
3. ✅ Add images (optional but recommended)
4. ✅ Test all links
5. ✅ Set up analytics
6. ✅ Deploy to production

---

**The brand website is ready to use!** Just customize the Amazon links and you're good to go.

