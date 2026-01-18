# Cloudflare Pages Deployment Guide

## Quick Deploy via Cloudflare Dashboard

### Option 1: Connect GitHub Repository (Recommended)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Navigate to **Pages** → **Create a project**

2. **Connect Repository**
   - Click **Connect to Git**
   - Select **GitHub** and authorize Cloudflare
   - Choose repository: `axitrinillc-cloud/AXITRINI`
   - Click **Begin setup**

3. **Build Configuration**
   - **Framework preset**: `Next.js (Static HTML Export)` or `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)
   - **Node version**: `18` or `20`

4. **Environment Variables** (if needed)
   - Add any required environment variables
   - Click **Save and Deploy**

### Option 2: Manual Deployment via Wrangler CLI

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy .next --project-name=axitrini
   ```

## Important Notes

### For Next.js on Cloudflare Pages:

1. **Static Export** (Recommended for this site):
   - The site is mostly static, so static export works well
   - Update `next.config.js` to add `output: 'export'` for full static export
   - Or use Cloudflare's Next.js runtime support

2. **Image Optimization**:
   - Images are set to `unoptimized: true` for Cloudflare compatibility
   - Consider using Cloudflare Images or external CDN for optimization

3. **Build Settings**:
   - **Build command**: `npm run build`
   - **Output directory**: `.next` (or `out` if using static export)
   - **Node version**: 18.x or 20.x

## Custom Domain Setup

1. **In Cloudflare Pages Dashboard**:
   - Go to your project → **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `axitrini.com` and `www.axitrini.com`

2. **DNS Configuration**:
   - Cloudflare will automatically configure DNS
   - Or manually add CNAME records:
     - `axitrini.com` → `your-project.pages.dev`
     - `www.axitrini.com` → `your-project.pages.dev`

## Troubleshooting

### 404 Errors:
- Ensure build completes successfully
- Check build output directory is correct
- Verify custom domain DNS is configured

### Build Failures:
- Check Node version (use 18 or 20)
- Ensure all dependencies are in `package.json`
- Review build logs in Cloudflare dashboard

### Static Export Issues:
- If using static export, ensure no server-side features
- All pages should be statically generatable

## Current Configuration

- **Framework**: Next.js 14
- **Build**: Standard Next.js build
- **Output**: Standalone mode (compatible with Cloudflare)
- **Images**: Unoptimized (Cloudflare compatible)

