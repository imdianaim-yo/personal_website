/* ============================================
   POTTERY SHOP - JavaScript
   This file makes the shop page interactive
   ============================================ */

// ============================================
// DATA: Pottery Items
// Think of this as a mini-database
// ============================================
const potteryItems = [
  {
    id: 1,
    name: "fruit bowl - ranch butter",
    price: 45,
    images: [
      "images/pottery/1_Ranch butter bowl/IMG_4106 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4107 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4108 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4109 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4111 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4112 4.jpg",
      "images/pottery/1_Ranch butter bowl/IMG_4217 3.jpg"
    ],
    video: "images/pottery/1_Ranch butter bowl/IMG_4113 4.mp4",
    description: "hand-thrown stoneware serving bowl in ranch butter glaze. fired at cone 10. 8 in diameter; 2.25 in height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 2,
    name: "blates - pistachio green",
    price: 25,
    images: [
      "images/pottery/2_Green blates/IMG_4136 3.jpg",
      "images/pottery/2_Green blates/IMG_4138 3.jpg",
      "images/pottery/2_Green blates/IMG_4139 3.jpg",
      "images/pottery/2_Green blates/IMG_4143 3.jpg",
      "images/pottery/2_Green blates/IMG_4148 3.jpg",
      "images/pottery/2_Green blates/IMG_4149 3.jpg"
    ],
    video: "images/pottery/2_Green blates/IMG_4145 3.mp4",
    description: "hand-thrown stoneware blates (bowl plates) in pistachio green glaze. fired at cone 10. 7 in diameter; 1.25 in height.",
    category: "blates",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 3,
    name: "garlic grater - emerald",
    price: 22,
    images: [
      "images/pottery/3_Green grater/IMG_4150 3.jpg",
      "images/pottery/3_Green grater/IMG_4151 3.jpg",
      "images/pottery/3_Green grater/IMG_4152 3.jpg",
      "images/pottery/3_Green grater/IMG_4153 3.jpg",
      "images/pottery/3_Green grater/IMG_4155 3.jpg"
    ],
    video: "images/pottery/3_Green grater/IMG_4154 3.mp4",
    description: "functional garlic grater in a beautiful rich green color. hand-thrown and hand-etched. 4.25in diameter x 1.15in height.",
    category: "functional",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 4,
    name: "matcha bowl - blue stripes",
    price: 25,
    images: [
      "images/pottery/4_Blue stripe matcha bowl/IMG_4156 3.jpg",
      "images/pottery/4_Blue stripe matcha bowl/IMG_4157 3.jpg",
      "images/pottery/4_Blue stripe matcha bowl/IMG_4158 3.jpg",
      "images/pottery/4_Blue stripe matcha bowl/IMG_4159 3.jpg",
      "images/pottery/4_Blue stripe matcha bowl/IMG_4218 3.jpg"
    ],
    video: "images/pottery/4_Blue stripe matcha bowl/IMG_4160 3.mp4",
    description: "cool blue matcha bowl. a fun little piece that i love! she's 5.5 in in diameter by 2.25 in height.",
    category: "matcha bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 5,
    name: "matcha bowl - green earth",
    price: 25,
    images: [
      "images/pottery/5_Green matcha bowl/IMG_4161 3.jpg",
      "images/pottery/5_Green matcha bowl/IMG_4162 3.jpg",
      "images/pottery/5_Green matcha bowl/IMG_4163 3.jpg",
      "images/pottery/5_Green matcha bowl/IMG_4164 3.jpg",
      "images/pottery/5_Green matcha bowl/IMG_4220 3.jpg"
    ],
    video: "images/pottery/5_Green matcha bowl/IMG_4165 3.mp4",
    description: "a matcha bowl to match your favorite morning drink! 5 in diameter by 2.25 in height.",
    category: "matcha bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 6,
    name: "bowl - pistachio cream",
    price: 25,
    images: [
      "images/pottery/6_Pistachio cream bowl/IMG_4117 3.jpg",
      "images/pottery/6_Pistachio cream bowl/IMG_4118 3.jpg",
      "images/pottery/6_Pistachio cream bowl/IMG_4119 3.jpg",
      "images/pottery/6_Pistachio cream bowl/IMG_4120 3.jpg",
      "images/pottery/6_Pistachio cream bowl/IMG_4216 3.jpg"
    ],
    video: "images/pottery/6_Pistachio cream bowl/IMG_4121 3.mp4",
    description: "creamy pistachio matte bowl, hand-thrown. dimensions are 6 in diameter by 2.75 in height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 7,
    name: "plate - sea blue",
    price: 25,
    images: [
      "images/pottery/7_Sea blue plate/IMG_4215 3.jpg",
      "images/pottery/7_Sea blue plate/IMG_4123 3.jpg",
      "images/pottery/7_Sea blue plate/IMG_4124 3.jpg",
      "images/pottery/7_Sea blue plate/IMG_4125 3.jpg"
    ],
    video: "images/pottery/7_Sea blue plate/IMG_4127 3.mp4",
    description: "sea blue & white plate, double dipped cutie! she's 7 inches in diameter and 0.5 inches in height. she'll be perfect for your little appetizer or girl dinner.",
    category: "plates",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 8,
    name: "soup bowl - burnt butter",
    price: 35,
    images: [
      "images/pottery/8_Sand soup bowls/IMG_4128 3.jpg",
      "images/pottery/8_Sand soup bowls/IMG_4129 3.jpg",
      "images/pottery/8_Sand soup bowls/IMG_4130 3.jpg",
      "images/pottery/8_Sand soup bowls/IMG_4131 3.jpg",
      "images/pottery/8_Sand soup bowls/IMG_4132 3.jpg",
      "images/pottery/8_Sand soup bowls/IMG_4134 3.jpg"
    ],
    video: "images/pottery/8_Sand soup bowls/IMG_4133 3.mp4",
    description: "beautiful taupe (romanticized as burnt butter) soup bowls in a matte glaze. 7 inches diameter x 3.25 inches height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 9,
    name: "matcha bowl - sea blue",
    price: 25,
    images: [
      "images/pottery/9_Sea blue matcha bowl/IMG_4166 3.jpg",
      "images/pottery/9_Sea blue matcha bowl/IMG_4167 3.jpg",
      "images/pottery/9_Sea blue matcha bowl/IMG_4169 3.jpg",
      "images/pottery/9_Sea blue matcha bowl/IMG_4170 3.jpg",
      "images/pottery/9_Sea blue matcha bowl/IMG_4221 3.jpg"
    ],
    video: "images/pottery/9_Sea blue matcha bowl/IMG_4171 3.mp4",
    description: "sea blue & white matcha bowl, bringing peace to every matcha routine. she's petite!",
    category: "matcha bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 10,
    name: "blates - sea blue",
    price: 30,
    images: [
      "images/pottery/10_Sea bowl shallow bowls/IMG_4197 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4198 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4200 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4201 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4203 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4204 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4206 3.jpg",
      "images/pottery/10_Sea bowl shallow bowls/IMG_4207 3.jpg"
    ],
    video: "images/pottery/10_Sea bowl shallow bowls/IMG_4205 3.mp4",
    description: "sea blue & white blates, perfect for pasta and honestly anything else you might be eating. she's 7 inches in diameter x 2.75 inches in height.",
    category: "blates",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 11,
    name: "bowl - vanilla cream",
    price: 30,
    images: [
      "images/pottery/11_Vanilla soup bowl 1/IMG_4175 3.jpg",
      "images/pottery/11_Vanilla soup bowl 1/IMG_4174 3.jpg",
      "images/pottery/11_Vanilla soup bowl 1/IMG_4176 3.jpg",
      "images/pottery/11_Vanilla soup bowl 1/IMG_4178 3.jpg"
    ],
    video: "images/pottery/11_Vanilla soup bowl 1/IMG_4180 3.mp4",
    description: "vanilla cream soup bowl - a mix of creamy yellow and white! brightens your mood every time you eat from it :) she's 6.5 inches in diameter x 3 in in height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 12,
    name: "bowl - vanilla cream II",
    price: 30,
    images: [
      "images/pottery/12_Vanilla soup bowl 2/IMG_4184 3.jpg",
      "images/pottery/12_Vanilla soup bowl 2/IMG_4185 3.jpg",
      "images/pottery/12_Vanilla soup bowl 2/IMG_4182 3.jpg",
      "images/pottery/12_Vanilla soup bowl 2/IMG_4186 3.jpg"
    ],
    video: null,
    description: "vanilla cream soup bowl - a mix of creamy yellow and white! brightens your mood every time you eat from it :) she's 6.5 inches in diameter x 3 in in height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 13,
    name: "bowl - vanilla cream set of 2",
    price: 30,
    images: [
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4187 3.jpg",
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4188 3.jpg",
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4189 3.jpg",
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4191 3.jpg",
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4193 3.jpg",
      "images/pottery/13_Vanilla soup bowls set of 2/IMG_4196 3.jpg"
    ],
    video: "images/pottery/13_Vanilla soup bowls set of 2/IMG_4192 3.mp4",
    description: "vanilla cream soup bowl - a mix of creamy yellow and white! brightens your mood every time you eat from it :) she's 6 inches in diameter x 3 in in height.",
    category: "bowls",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  },
  {
    id: 14,
    name: "pear-shaped vase - matte charcoal",
    price: 45,
    images: [
      "images/pottery/14_Pear vase charcoal/IMG_4295.jpg",
      "images/pottery/14_Pear vase charcoal/IMG_4296.jpg",
      "images/pottery/14_Pear vase charcoal/IMG_4297.jpg",
      "images/pottery/14_Pear vase charcoal/IMG_4298.jpg"
    ],
    video: null,
    description: "hand-thrown pear-shaped vase in a rich matte charcoal glaze. perfect for a statement piece or fresh flowers.",
    category: "functional",
    inStock: true,
    stripeLink: "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK"
  }
];

// ============================================
// STATE: Current filter selection + Carousel state
// ============================================
let currentFilter = 'all'; // Start by showing all items
// Track current image index for each card (key = item id, value = current index)
const carouselState = {};

// ============================================
// FUNCTION: Render Gallery
// Creates HTML cards for pottery items
// ============================================
function renderGallery(filter = 'all') {
  const gallery = document.getElementById('gallery');
  const emptyState = document.getElementById('empty-state');

  // Filter items based on category
  let filteredItems = potteryItems;
  if (filter !== 'all') {
    filteredItems = potteryItems.filter(item => item.category === filter);
  }

  // If no items match the filter, show empty state
  if (filteredItems.length === 0) {
    gallery.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  } else {
    emptyState.style.display = 'none';
  }

  // Create HTML for each pottery item
  const cardsHTML = filteredItems.map(item => {
    // Initialize carousel state for this item if not exists
    if (!carouselState[item.id]) {
      carouselState[item.id] = 0; // Start at first image
    }

    // Determine button HTML based on stock status
    let buttonHTML;
    if (item.inStock) {
      buttonHTML = `
        <a href="https://www.instagram.com/imdianaim/" target="_blank" class="btn">
          Purchase - contact @imdianaim on instagram
        </a>
        <button class="btn btn-secondary" disabled style="font-size: 0.85rem;">
          Buy now (working on online payments!)
        </button>
      `;
    } else {
      buttonHTML = `<button class="btn" disabled style="opacity: 0.5; cursor: not-allowed;">Sold Out</button>`;
    }

    // Combine images and video into one media array
    const allMedia = [...item.images];
    if (item.video) {
      allMedia.push(item.video);
    }

    // Initialize carousel state for this item if not exists
    if (!carouselState[item.id]) {
      carouselState[item.id] = 0;
    }
    const currentIndex = carouselState[item.id];

    // Render ALL media items for swipable carousel
    const mediaHTML = allMedia.map((media, index) => {
      const isVideo = media.endsWith('.mp4') || media.endsWith('.mov') || media.endsWith('.webm');
      if (isVideo) {
        return `
          <video
            class="card-image"
            autoplay
            loop
            muted
            playsinline
            onerror="this.outerHTML='<img src=\\'https://via.placeholder.com/400x400?text=Video+Error\\' class=\\'card-image\\'>'"
          >
            <source src="${media}" type="video/mp4">
          </video>
        `;
      } else {
        return `
          <img
            src="${media}"
            alt="${item.name}"
            class="card-image"
            onerror="this.src='https://via.placeholder.com/400x400?text=Image+Coming+Soon'"
          >
        `;
      }
    }).join('');

    // Create carousel navigation if multiple media items
    let carouselControls = '';
    if (allMedia.length > 1) {
      carouselControls = `
        <button class="card-carousel-btn card-carousel-prev" onclick="navigateCardCarousel(${item.id}, -1, event)" aria-label="Previous image">‹</button>
        <button class="card-carousel-btn card-carousel-next" onclick="navigateCardCarousel(${item.id}, 1, event)" aria-label="Next image">›</button>
        <div class="card-carousel-dots">
          ${allMedia.map((_, index) =>
            `<span class="carousel-dot ${index === currentIndex ? 'active' : ''}" data-item-id="${item.id}" data-index="${index}"></span>`
          ).join('')}
        </div>
      `;
    }

    // Return card HTML (using template literal)
    return `
      <div class="card">
        <div class="card-image-wrapper">
          <div class="card-image-container" data-item-id="${item.id}">
            ${mediaHTML}
          </div>
          ${carouselControls}
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-price">$${item.price}</p>
          <p class="card-description">${item.description}</p>
          <div class="card-footer">
            ${buttonHTML}
          </div>
        </div>
      </div>
    `;
  }).join(''); // join() combines all cards into one big string

  // Insert cards into the gallery
  gallery.innerHTML = cardsHTML;

  // Set up swipable carousels for each card
  setupSwipableCarousels();
}

// ============================================
// FUNCTION: Setup Swipable Carousels
// Handle scroll tracking and dot updates for card image carousels
// ============================================
function setupSwipableCarousels() {
  const containers = document.querySelectorAll('.card-image-container');

  containers.forEach(container => {
    const itemId = parseInt(container.getAttribute('data-item-id'));
    const dots = container.querySelectorAll('.carousel-dot');

    if (dots.length === 0) return;

    // Update active dot based on scroll position
    container.addEventListener('scroll', () => {
      const scrollPosition = container.scrollLeft;
      const imageWidth = container.offsetWidth;
      const currentIndex = Math.round(scrollPosition / imageWidth);

      // Update carousel state
      carouselState[itemId] = currentIndex;

      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });

    // Click dot to scroll to that image
    dots.forEach((dot) => {
      dot.addEventListener('click', (event) => {
        event.stopPropagation();
        const index = parseInt(dot.getAttribute('data-index'));
        const imageWidth = container.offsetWidth;
        container.scrollTo({
          left: imageWidth * index,
          behavior: 'smooth'
        });
      });
    });
  });
}

// ============================================
// FUNCTION: Filter by Category
// Show only items in selected category
// ============================================
function filterByCategory(category) {
  currentFilter = category;
  renderGallery(category);

  // Update active button styling
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ============================================
// FUNCTION: Navigate Card Carousel
// Move to next/previous image on a specific card by scrolling
// ============================================
function navigateCardCarousel(itemId, direction, event) {
  // Prevent any parent click handlers
  event.stopPropagation();

  // Find the container for this item
  const container = document.querySelector(`.card-image-container[data-item-id="${itemId}"]`);
  if (!container) return;

  // Get the item to count media
  const item = potteryItems.find(i => i.id === itemId);
  if (!item) return;

  const allMedia = [...item.images];
  if (item.video) {
    allMedia.push(item.video);
  }

  // Update index with wrapping
  let newIndex = carouselState[itemId] + direction;
  if (newIndex < 0) {
    newIndex = allMedia.length - 1;
  } else if (newIndex >= allMedia.length) {
    newIndex = 0;
  }

  carouselState[itemId] = newIndex;

  // Scroll to the new image
  const imageWidth = container.offsetWidth;
  container.scrollTo({
    left: imageWidth * newIndex,
    behavior: 'smooth'
  });
}

// ============================================
// EVENT LISTENERS
// Set up interactivity when page loads
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Initial render: show all items
  renderGallery('all');

  // Filter button clicks
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.dataset.category;
      filterByCategory(category);
    });
  });
});

/* ============================================
   HOW TO ADD NEW POTTERY ITEMS:

   FILE STRUCTURE:
   Create a folder for each piece inside images/pottery/

   Example:
   images/pottery/
     ├── ocean-mug/
     │   ├── front.jpg
     │   ├── side.jpg
     │   ├── detail.jpg
     │   └── spinning.mp4
     ├── rustic-bowl/
     │   ├── top.jpg
     │   └── angle.jpg

   THEN ADD TO CODE:
   Add a new object to the potteryItems array above:

   {
     id: 6,
     name: "sunset vase",
     price: 50,
     images: [
       "images/pottery/sunset-vase/front.jpg",
       "images/pottery/sunset-vase/side.jpg",
       "images/pottery/sunset-vase/detail.jpg"
     ],
     video: "images/pottery/sunset-vase/spinning.mp4", // Optional (or null)
     description: "your description here in lowercase.",
     category: "vases", // "mugs", "bowls", "vases", "plates"
     inStock: true,
     stripeLink: "https://buy.stripe.com/your-link-here"
   }

   Refresh the page - it will automatically appear!

   KEY FEATURES:
   ✓ Images carousel directly on each card (no popup needed)
   ✓ Hover to see left/right arrows (always visible on mobile)
   ✓ Click dots at bottom to jump to specific photo
   ✓ Videos auto-play when visible
   ✓ Supports .jpg, .png, .mp4, .mp4, .webm
   ============================================ */
