# Pottery Resume Website - Implementation Checklist

## Phase 1: Project Setup ✅
- [x] Create project folder structure
- [x] Create images/projects and images/pottery directories
- [x] Create fonts directory for custom fonts
- [x] Create global styles.css file
- [x] Create .gitignore file
- [x] Create README.md with deployment instructions
- [x] Set up Satisfy font (Google Fonts) for handwritten aesthetic
- [x] Configure minimal clean design (off-white background, black text)

## Phase 2: Base HTML Structure ✅
- [x] Create index.html (Homepage)
  - [x] Add HTML boilerplate (head, meta tags)
  - [x] Add navigation bar
  - [x] Add hero section with intro text
  - [x] Link to styles.css

- [x] Create shop.html (Pottery Shop)
  - [x] Add HTML boilerplate
  - [x] Add navigation bar
  - [x] Add filter buttons section
  - [x] Add gallery grid container
  - [x] Add image modal markup
  - [x] Link to styles.css and shop.js

- [x] Create resume.html (Professional Resume)
  - [x] Add HTML boilerplate
  - [x] Add navigation bar
  - [x] Add work experience section
  - [x] Add education section
  - [x] Add skills section
  - [x] Add projects showcase section
  - [x] Link to styles.css

## Phase 3: JavaScript Functionality ✅
- [x] Create shop.js
  - [x] Define potteryItems array with sample data
  - [x] Write renderGallery() function
  - [x] Write filterByCategory() function
  - [x] Write openModal() function for image enlargement
  - [x] Write closeModal() function
  - [x] Add event listeners

## Phase 4: Content Population
- [x] Homepage
  - [x] Add your name and title
  - [x] Add "about me" paragraph

- [x] Resume Page
  - [ ] Add work experience entries
  - [x] Add education entries
  - [x] Add skills list
  - [x] Add project cards with descriptions
  - [X] Add project images to images/projects/

- [x] Shop Page
  - [x] Add pottery images to images/pottery/
  - [x] Update potteryItems array with real pottery data
  - [x] Add pottery descriptions and prices

## Phase 5: Stripe Integration
- [ ] Set up Stripe account
- [ ] Create payment links for each pottery item
- [ ] Add Stripe payment links to potteryItems array
- [ ] Test "Buy Now" buttons

## Phase 6: Polish & Testing
- [x] Test navigation works on all pages
- [x] Test image modals open and close
- [x] Test filter buttons on shop page
- [x] Test all external links open in new tab
- [x] Test mobile responsiveness (phone view)
- [x] Test on different browsers (Chrome, Safari, Firefox)
- [x] Optimize images (resize to 800x800px, compress)
- [ ] Add alt text to all images (accessibility)

## Phase 7: GitHub Deployment
- [x] Create GitHub account (if needed)
- [x] Create new repository: "personal_website"
- [ ] Upload all files to repository
- [ ] Enable GitHub Pages in repo settings
- [ ] Test live site URL
- [ ] Share site link!

## Optional Enhancements (Future)
- [ ] Add YouTube video embed on shop page
- [ ] Add contact form (Formspree integration)
- [ ] Add downloadable PDF resume
- [ ] Add Instagram feed embed
- [ ] Set up custom domain
- [ ] Add Google Analytics for traffic tracking
- [ ] Add testimonials section

---

## Current Status
**Last Updated:** January 25, 2026 - Core site complete with minimal clean design ✅

**Design Style:**
- Off-white cream background (#f5f3f0)
- Clean black text on light background
- Satisfy font (handwritten script) for logo and H1 headings
- All lowercase aesthetic (diana im, headings)
- Sans-serif for navigation and body text
- Minimal, gallery-style presentation

**What's Working:**
- ✅ All 3 pages built and styled with minimal aesthetic
- ✅ Navigation works across pages (centered logo, side nav links)
- ✅ Shop page with filters and sample pottery items
- ✅ Image modal (click to enlarge) functional
- ✅ Mobile responsive design
- ✅ Satisfy font loaded from Google Fonts
- ✅ Ready for content population

**Next Steps:**
1. **Add your content** to replace placeholder text
2. **Add pottery photos** to images/pottery/ folder
3. **Update pottery data** in shop.js with real items and prices
4. **Set up Stripe** payment links
5. **Test thoroughly** on mobile and desktop
6. **Deploy to GitHub Pages**
