# Logo Integration Guide - Axitrini

## 📍 Where to Place Your Logo

### File Location
Place your logo file(s) in the `/public` directory:

```
axitrini/
└── public/
    ├── logo.svg          ← Place your logo here (recommended)
    ├── logo.png          ← Or use PNG format
    └── favicon.ico        ← Browser tab icon (optional)
```

### Quick Steps

1. **Add your logo file** to `/public/logo.svg` (or `/public/logo.png`)
2. **Update components** to use image logo (see below)
3. **Test** - The logo will automatically appear

## 🎨 Logo File Recommendations

### SVG Format (Best Choice)
- **File**: `/public/logo.svg`
- **Advantages**: 
  - Scales perfectly at any size
  - Small file size
  - Crisp on all displays
- **Recommended dimensions**: Any size (vector scales)

### PNG Format (Alternative)
- **File**: `/public/logo.png`
- **Recommended sizes**:
  - Standard: 200x60px (for navbar)
  - Retina (@2x): 400x120px (for high-DPI displays)
- **Format**: PNG-24 with transparency

## 🔧 How to Switch to Image Logo

Once you place your logo file, update the Logo component:

### Option 1: Update Logo Component (Automatic)

The Logo component is already set up. Just place your logo file at `/public/logo.svg` and update the component to use `variant="image"`:

**File**: `components/Logo.tsx`

Change this line in the component:
```tsx
variant = 'auto'  // Change to 'image'
```

Or update individual usages:
```tsx
<Logo href="/" size="md" variant="image" />
```

### Option 2: Manual Update (If you want full control)

Update these files to use the image logo:

1. **Navbar** (`components/layout/Navbar.tsx`)
2. **Brand Navbar** (`components/layout/BrandNavbar.tsx`)
3. **Footer** (`components/layout/Footer.tsx`)

Replace the Logo component usage with:
```tsx
<Logo href="/" size="md" variant="image" />
```

## 📐 Logo Sizes by Location

| Location | Component | Size | Notes |
|----------|-----------|------|-------|
| Navbar | `Navbar.tsx` | `md` (h-8) | Standard navigation |
| Brand Navbar | `BrandNavbar.tsx` | `md` (h-8) | Brand page header |
| Footer | `Footer.tsx` | `md` (h-8) | Footer branding |
| Hero Section | `page.tsx` | `xl` (h-12) | Large hero display |

## 🎯 Current Implementation

The website currently uses a **text-based logo** (styled "Axitrini" text) in:
- ✅ Navbar - Uses `<Logo>` component
- ✅ Footer - Uses `<Logo>` component  
- ✅ Brand Navbar - Uses `<Logo>` component
- ✅ Home page hero - Large text logo (can be updated)

## 📝 Step-by-Step Integration

### Step 1: Add Logo File
```bash
# Place your logo file here:
/public/logo.svg
```

### Step 2: Update Components (I can do this for you)

The Logo component supports three modes:
- `variant="text"` - Always shows text (current default)
- `variant="image"` - Always shows image
- `variant="auto"` - Tries image, falls back to text

### Step 3: Test
1. Start dev server: `npm run dev`
2. Check navbar, footer, and brand page
3. Verify logo displays correctly on mobile and desktop

## 🖼️ Logo Specifications

Based on your brand description, your logo should include:
- **Graphic**: Stylized 'A' with blue/green ribbons and orange sphere
- **Wordmark**: "Axitrini" text (blue "Axitri" + green "ni")
- **Format**: SVG preferred, PNG acceptable
- **Background**: Should work on white/light backgrounds
- **Size**: Should be readable at 40px height (navbar) and 120px height (hero)

## 🔄 Quick Update Commands

Once you have your logo file ready:

1. **Place the file**:
   ```bash
   # Copy your logo to:
   cp /path/to/your/logo.svg /home/omprakash/axitrini/public/logo.svg
   ```

2. **Update to use image** (I can do this automatically):
   - Change `variant="auto"` to `variant="image"` in Logo component
   - Or update individual Logo usages

3. **Test**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

## 📍 File Structure

```
axitrini/
├── public/              ← PUT YOUR LOGO HERE
│   ├── logo.svg        ← Main logo (recommended)
│   ├── logo.png        ← Fallback (optional)
│   └── favicon.ico     ← Browser icon (optional)
├── components/
│   ├── Logo.tsx        ← Logo component (handles display)
│   └── layout/
│       ├── Navbar.tsx  ← Uses Logo component
│       ├── Footer.tsx  ← Uses Logo component
│       └── BrandNavbar.tsx ← Uses Logo component
└── app/
    ├── page.tsx        ← Home page (has large text logo)
    └── brand/
        └── page.tsx    ← Brand page (has large text logo)
```

## ✅ What's Already Done

- ✅ Logo component created (`components/Logo.tsx`)
- ✅ Navbar updated to use Logo component
- ✅ Footer updated to use Logo component
- ✅ Brand Navbar updated to use Logo component
- ✅ Supports text and image variants
- ✅ Responsive sizing (sm, md, lg, xl)
- ✅ Fallback to text if image not found

## 🚀 Next Steps

1. **Add your logo file** to `/public/logo.svg`
2. **Tell me when it's ready** and I'll update the components to use the image
3. **Or update manually** by changing `variant="auto"` to `variant="image"` in the Logo component

## 💡 Pro Tips

- **SVG is best** - Works at any size, smaller file size
- **Test on mobile** - Ensure logo is readable at small sizes
- **Consider dark mode** - If you plan to add dark mode, prepare a light variant
- **Favicon** - Also add `/public/favicon.ico` for browser tab icon

---

**Ready to add your logo?** Just place the file in `/public/logo.svg` and let me know - I can update all components automatically!
