# Pottery Resume Website

A personal website combining professional resume/portfolio with a pottery e-commerce shop. Built with pure HTML, CSS, and JavaScript - no frameworks, no build tools, zero monthly costs.

## 🎯 What's Included

- **Homepage** (`index.html`) - Clean landing page with intro text
- **Shop Page** (`shop.html`) - Pottery gallery with filters and Stripe payment integration
- **Resume Page** (`resume.html`) - Professional portfolio with projects showcase
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## 🚀 Quick Start

### 1. View Locally

Simply open `index.html` in your web browser. That's it!

**On Mac:**
- Double-click `index.html`, or
- Right-click → Open With → Chrome/Safari

**On Windows:**
- Double-click `index.html`

### 2. Add Your Content

#### Homepage (index.html)
- Line 36-38: Update your name and intro paragraph
- You're done!

#### Resume (resume.html)
- Lines 30-60: Replace example jobs with your actual work experience
- Lines 65-75: Update education section
- Lines 81-92: Add/remove skills
- Lines 98-150: Add your projects with photos and descriptions

#### Shop (shop.js)
- Lines 11-50: Add/edit pottery items in the `potteryItems` array
- Each item needs: name, price, image path, description, category, Stripe link

### 3. Add Images

**Pottery Images:**
1. Take photos of your pottery (square photos work best)
2. Resize to 800x800 pixels (use https://squoosh.app - free, no signup)
3. Save to `images/pottery/` folder
4. Name them clearly: `mug-1.jpg`, `bowl-blue.jpg`, etc.

**Project Images:**
1. Screenshot your projects or use product photos
2. Resize to 800x800 pixels
3. Save to `images/projects/` folder
4. Reference in `resume.html`

**Recommended Image Tool:**
- **Squoosh.app** - Free online image compressor
  - Drag & drop your photo
  - Resize to 800x800px
  - Compress to ~150-200KB
  - Download and save to images folder

### 4. Set Up Stripe (For Payments)

**Create Account:**
1. Go to https://stripe.com
2. Sign up for free account (no monthly fee)
3. Complete business verification

**Create Payment Links:**
1. In Stripe Dashboard, click "Products" → "Add Product"
2. Enter product details:
   - Name: "Ocean Blue Mug"
   - Price: $38
3. Click "Create Product"
4. Click "Create payment link"
5. Add shipping cost ($15 typical for pottery)
6. Copy the payment link: `https://buy.stripe.com/abc123...`
7. Paste it into the `stripeLink` field in `shop.js`

**Repeat for each pottery item.**

**When someone buys:**
- Stripe emails you: "You've got a sale!"
- Customer gets receipt with their address
- You ship the item
- Stripe deposits money in your bank (2-7 days)

### 5. Deploy to GitHub Pages (FREE Hosting)

**One-Time Setup:**

1. **Create GitHub Account**
   - Go to https://github.com
   - Sign up (free)

2. **Create Repository**
   - Click "New Repository"
   - Name: `pottery-resume-site`
   - Public or Private (your choice)
   - Click "Create"

3. **Upload Files**
   - Click "Upload files"
   - Drag all files/folders from your computer
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` → `/root`
   - Click "Save"

5. **Get Your Live URL**
   - Wait ~1 minute
   - Your site is live at: `https://yourusername.github.io/pottery-resume-site`

**Updating Your Site:**

**Method 1: GitHub Website (Easiest)**
1. Go to your repository
2. Click on the file you want to edit (e.g., `shop.js`)
3. Click the pencil icon (Edit)
4. Make your changes
5. Click "Commit changes"
6. Site updates in ~1 minute

**Method 2: GitHub Desktop App**
1. Download GitHub Desktop (free)
2. Clone your repository
3. Edit files on your computer
4. Click "Commit to main"
5. Click "Push origin"

**Method 3: Command Line (Advanced)**
```bash
git clone https://github.com/yourusername/pottery-resume-site.git
# Make changes to files
git add .
git commit -m "Update pottery items"
git push
```

### 6. Optional: Custom Domain

Instead of `yourusername.github.io`, use your own domain like `pottery.yourname.com`

1. **Buy Domain** (~$12/year)
   - Namecheap.com or Google Domains
   - Search for available names

2. **Configure DNS**
   - In domain settings, add these records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Update GitHub Pages**
   - Settings → Pages
   - Custom domain: `yourname.com`
   - Enable "Enforce HTTPS"

## 📁 File Structure

```
pottery-resume-site/
├── index.html           # Homepage
├── shop.html            # Pottery shop
├── resume.html          # Professional resume
├── styles.css           # All styling
├── shop.js              # Shop interactivity
├── images/
│   ├── pottery/         # Pottery photos
│   └── projects/        # Project screenshots
└── README.md            # This file
```

## 🛠️ Common Tasks

### Add a New Pottery Item
1. Add photo to `images/pottery/`
2. Create Stripe payment link
3. Add new object to `potteryItems` array in `shop.js`:
   ```javascript
   {
     id: 6,
     name: "New Mug",
     price: 40,
     image: "images/pottery/new-mug.jpg",
     description: "Description here",
     category: "mugs",
     inStock: true,
     stripeLink: "https://buy.stripe.com/your-link"
   }
   ```
4. Refresh page to see it!

### Mark Item as Sold
In `shop.js`, change `inStock` to `false`:
```javascript
{
  id: 3,
  name: "Sold Out Item",
  inStock: false  // Changes button to "Sold Out"
}
```

### Add a New Project to Resume
1. Add image to `images/projects/`
2. In `resume.html`, copy a project card div and update:
   - Image path
   - Project name
   - Description
   - Technologies used
   - Link to live project

### Change Colors
Edit `styles.css` lines 7-12 (CSS variables):
```css
--clay-dark: #2c2416;    /* Main text color */
--accent: #d4a574;       /* Buttons, highlights */
--cream: #f5f1e8;        /* Background */
```

## 💡 Tips

- **Test on mobile**: Open site on your phone to check responsiveness
- **Optimize images**: Large images slow down your site - keep under 200KB each
- **Update regularly**: Add new pottery as you make it, keep resume current
- **Share specific pages**: Share `yoursite.com/resume.html` with employers
- **Track visitors**: Add Google Analytics (free) to see traffic

## 🆘 Troubleshooting

**Images don't show:**
- Check file path is correct: `images/pottery/mug-1.jpg`
- Check file exists in the folder
- File names are case-sensitive: `Mug-1.jpg` ≠ `mug-1.jpg`

**Stripe button doesn't work:**
- Make sure Stripe link starts with `https://buy.stripe.com/`
- Test in incognito mode (some ad blockers block Stripe)

**Site not updating on GitHub Pages:**
- Wait 2-3 minutes after pushing changes
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check GitHub Actions tab for deploy status

**Layout broken on mobile:**
- Open Developer Tools (F12)
- Click device icon to test mobile view
- Check for horizontal scrolling

## 📚 Learning Resources

- **HTML/CSS Basics**: https://developer.mozilla.org/en-US/docs/Learn
- **JavaScript Tutorial**: https://javascript.info
- **Git Basics**: https://try.github.io
- **Stripe Docs**: https://stripe.com/docs/payments/payment-links

## 📝 License

This is your personal website - do whatever you want with it!

---

**Questions?** Check the code comments in each file - they explain how everything works step-by-step.
