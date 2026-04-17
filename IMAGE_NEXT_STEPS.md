# Images — Next Steps

## The Problem

Images aren't loading because the HTML uses **absolute paths** (starting with `/`):
```html
<img src="/assets/images/IMG_1802.jpeg">
```

Absolute paths like `/assets/images/...` only work when the site is served from a **web server** at the domain root. When opening `index.html` as a local file (`file://`), the browser interprets `/` as the filesystem root (`/Users/...`), so images 404.

## Two Folders, One Job

There are currently **two copies** of the images:

| Folder | Files | Size | Purpose |
|--------|-------|------|---------|
| `assets/images/` | 19 images | ~50 MB | Used by all HTML pages |
| `images /Ministry Website /` | 15 images | ~38 MB | Original source (has spaces in folder name) |

`assets/images/` has 4 extra files not in `Ministry Website`: `E1FBA3A4-...jpeg`, `IMG_1991.jpeg`, `IMG_2393.jpeg`, `IMG_6748.jpeg`.

## Fix Options

### Option A: Use a local dev server (recommended)
Run a simple server so absolute paths work correctly:
```bash
cd /Users/ivydunlap/Repos/prospectus
npx serve .
# or
python3 -m http.server 8000
```
Then visit `http://localhost:8000`. No file changes needed.

### Option B: Switch to relative paths
Change all image paths from absolute to relative:
```html
<!-- index.html (root level) -->
<img src="assets/images/IMG_1802.jpeg">

<!-- pages/*.html (one level deep) -->
<img src="../assets/images/IMG_1802.jpeg">
```
This makes images work when opening files directly, but can break if pages move around.

### Option C: Deploy to hosting (for production)
Deploy to Netlify, Vercel, GitHub Pages, etc. Absolute paths (`/assets/images/...`) work perfectly on any web host. This is the eventual goal anyway.

## Image Optimization (Important)

Several images are very large for web use:

| File | Size | Issue |
|------|------|-------|
| IMG_1802.jpeg | 5.4 MB | Way too large — should be ~200-400 KB |
| IMG_8860.jpeg | 4.7 MB | Way too large |
| IMG_2206.jpeg | 4.4 MB | Way too large |
| IMG_2116.jpeg | 4.3 MB | Way too large |
| IMG_1949.jpeg | 3.3 MB | Too large |
| IMG_1947.jpeg | 3.2 MB | Too large |

**Total carousel payload: ~38 MB** — this will be very slow on mobile, especially in the Philippines.

### Recommended optimization:
1. Resize all images to max **1920px wide** (sufficient for full-viewport display)
2. Compress to JPEG quality ~80% — target **150-400 KB per image**
3. Consider generating **WebP versions** for modern browsers (30-50% smaller)
4. This would reduce total payload from ~38 MB to ~3-5 MB

Tools to do this:
```bash
# Using ImageMagick (install with: brew install imagemagick)
for img in assets/images/*.jpeg; do
  magick "$img" -resize 1920x1920\> -quality 82 -strip "$img"
done

# Or use an online tool like squoosh.app for manual control
```

## Cleanup

Once images are working, consider:
- [ ] Delete the `images /Ministry Website /` folder (it's a duplicate with a problematic space-in-name)
- [ ] Remove unused images from `assets/images/` if they aren't referenced anywhere
- [ ] Rename `E1FBA3A4-9CFD-4206-9928-31971FBE9F2B.jpeg` to something meaningful

## Quick Start

The fastest path to seeing images right now:
```bash
cd /Users/ivydunlap/Repos/prospectus
python3 -m http.server 8000
# Open http://localhost:8000
```
