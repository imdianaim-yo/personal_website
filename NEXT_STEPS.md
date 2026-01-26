# Your Site Is Built! Here's What to Do Next

## ✅ What's Complete

Your pottery resume website is fully built with:
- **Homepage** - Clean landing page with "diana im" in Satisfy font
- **Shop page** - Gallery with filters, sample pottery items, click-to-enlarge images
- **Resume page** - Professional portfolio layout with sections for work, education, skills, projects
- **Design** - Minimal, elegant aesthetic with off-white background and handwritten headers
- **Mobile responsive** - Works beautifully on phones and tablets

## 📝 Next: Add Your Content

### 1. Homepage (index.html)
**What to update:** Lines 36-42

Replace the placeholder intro text with your actual bio:
```html
<h1>hi, i'm diana im</h1>
<p>
  [Your actual intro paragraph - who you are, what you do]
</p>
```

### 2. Shop Page (shop.js)
**What to update:** Lines 11-50

**Step 1: Add your pottery photos**
- Take photos of your pottery pieces (square format works best)
- Save them to: `/Users/dianaim/pottery-resume-site/images/pottery/`
- Name them clearly: `mug-blue.jpg`, `bowl-rustic.jpg`, etc.

**Step 2: Update the potteryItems array**
```javascript
const potteryItems = [
  {
    id: 1,
    name: "Your Pottery Name",
    price: 45,
    image: "images/pottery/your-photo.jpg",
    description: "Hand-thrown stoneware...",
    category: "mugs", // or "bowls", "vases", "plates"
    inStock: true,
    stripeLink: "https://buy.stripe.com/YOUR_LINK" // Add after Stripe setup
  },
  // Add more items...
];
```

### 3. Resume Page (resume.html)
**What to update:** Multiple sections

**Work Experience** (Lines 30-60)
- Replace example jobs with your actual roles
- Update job titles, companies, dates
- Update bullet points with your accomplishments

**Education** (Lines 65-75)
- Add your degree, school, graduation year

**Skills** (Lines 81-92)
- Add/remove skills to match your expertise

**Projects** (Lines 98-150)
- Add screenshots to `images/projects/` folder
- Update project names, descriptions
- Add links to live projects or case studies
- Update technologies used

## 💳 Stripe Setup (For Shop Payments)

**Step 1: Create Stripe Account**
1. Go to https://stripe.com
2. Sign up (free, no monthly fee)
3. Complete verification

**Step 2: Create Payment Links**
For each pottery item:
1. Stripe Dashboard → Products → Add Product
2. Enter name and price (e.g., "Blue Mug - $40")
3. Add shipping cost if applicable
4. Click "Create payment link"
5. Copy the link: `https://buy.stripe.com/abc123...`
6. Paste into `stripeLink` field in shop.js

**When someone buys:**
- You get email: "You've got a sale!"
- Customer gets receipt with shipping address
- You ship the item
- Money appears in your bank in 2-7 days

## 🧪 Testing Checklist

Before deploying, test:
- [ ] Click through all 3 pages - navigation works
- [ ] Shop page: filter buttons work (All, Mugs, Bowls, etc.)
- [ ] Shop page: clicking images opens modal (enlarged view)
- [ ] Resume page: all sections display correctly
- [ ] Mobile view: open in phone browser or resize window
- [ ] All links work and open in new tabs

## 🚀 Deploy to GitHub Pages (Free Hosting)

**One-time setup (15 minutes):**

1. **Create GitHub account** (if needed)
   - Go to https://github.com
   - Sign up (free)

2. **Create repository**
   - Click "New Repository"
   - Name: `pottery-resume-site`
   - Public
   - Create

3. **Upload files**
   - Click "Upload files" in your repo
   - Drag your entire `pottery-resume-site` folder
   - Commit changes

4. **Enable GitHub Pages**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` → `/root`
   - Save

5. **Get your URL**
   - Wait ~2 minutes
   - Your site is live at: `https://yourusername.github.io/pottery-resume-site`

**To update your site later:**
- Edit files in GitHub (click file → pencil icon → edit → commit)
- Or use GitHub Desktop app for easier updates

## 🎨 Design Customization

Want to tweak the design? Edit `styles.css`:

**Change colors** (Lines 7-11):
```css
--cream: #f5f3f0;    /* Background color */
--black: #1a1a1a;    /* Text color */
--gray: #666666;     /* Secondary text */
```

**Change spacing** (Lines 13-18):
```css
--space-lg: 3rem;    /* Make sections more/less spacious */
```

**Change fonts:**
- H1/Logo font: Line 342 (`font-family: 'Satisfy', cursive;`)
- Body text: Line 36 (`font-family: var(--font-sans);`)

## 📁 Your Project Structure

```
pottery-resume-site/
├── index.html              ← Homepage
├── shop.html               ← Pottery gallery
├── resume.html             ← Professional portfolio
├── styles.css              ← All styling (colors, fonts, layout)
├── shop.js                 ← Shop functionality
├── images/
│   ├── pottery/           ← Add your pottery photos here
│   └── projects/          ← Add project screenshots here
├── fonts/                  ← (optional) For custom fonts
├── README.md               ← Deployment guide
├── IMPLEMENTATION_CHECKLIST.md  ← Progress tracker
└── NEXT_STEPS.md          ← This file!
```

## 🆘 Need Help?

**Images not showing?**
- Check file path: `images/pottery/mug-1.jpg`
- Check file exists in folder
- File names are case-sensitive

**Fonts look wrong?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check browser console for errors (F12)

**Site not updating on GitHub Pages?**
- Wait 2-3 minutes after uploading
- Hard refresh browser
- Check GitHub Actions tab for build status

## 🎯 Timeline Estimate

- **Add content:** 2-3 hours (writing copy, gathering info)
- **Add pottery photos:** 1 hour (photography, resizing, uploading)
- **Stripe setup:** 30 minutes (account creation, payment links)
- **Testing:** 30 minutes (check all pages, mobile view)
- **Deploy to GitHub:** 15 minutes (first time setup)

**Total:** ~5 hours to go from current state to live website!

---

Your site is ready to be filled with your content and launched. Start with adding your bio and work experience, then move to pottery photos and Stripe setup. You've got this!
