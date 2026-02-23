# Add Pottery Listing

You are adding a new item to the pottery shop. Follow every step in order. Do not skip steps or combine steps.

---

## Step 1: Collect listing details via guided questions

Ask each question **one at a time** using AskUserQuestion. Do not batch them together.

**Question 1 — Item name**
Ask: "What's the item name?" (e.g. "mug - sage green")

**Question 2 — Price**
Ask: "What's the price in dollars?" (numbers only, e.g. 30)

**Question 3 — Category**
Ask: "What category?" with these exact options: `bowls`, `blates`, `matcha bowls`, `plates`, `functional`

**Question 4 — Details for description**
Ask: "Tell me about this piece — glaze, color, dimensions, anything special about it?" (raw details, not a polished description — e.g. "matte sage green, fired cone 10, 6in diameter 3in height, really pretty color")

After receiving the answer, generate a description in Diana's voice before continuing to the next question. Use these existing descriptions as style references:
- "cool blue matcha bowl. a fun little piece that i love! she's 5.5 in in diameter by 2.25 in height."
- "sea blue & white plate, double dipped cutie! she's 7 inches in diameter and 0.5 inches in height. she'll be perfect for your little appetizer or girl dinner."
- "creamy pistachio matte bowl, hand-thrown. dimensions are 6 in diameter by 2.75 in height."
- "hand-thrown stoneware blates (bowl plates) in pistachio green glaze. fired at cone 10. 7 in diameter; 1.25 in height."
- "vanilla cream soup bowl - a mix of creamy yellow and white! brightens your mood every time you eat from it :) she's 6.5 inches in diameter x 3 in in height."

Style rules:
- All lowercase
- Warm, personal, conversational — like a friend describing a piece they made
- Mention color/glaze, type, and dimensions
- It's ok to add a little personality ("she's a cutie", "perfect for your morning matcha", ":)")
- Keep it 1–2 sentences max

Show the generated description to the user and ask: "Does this description work, or would you like to tweak it?" Wait for confirmation or edits before continuing. Use the confirmed description in the listing.

**Question 5 — Images folder path**
Ask: "What's the images folder path?" (e.g. `images/pottery/15_FolderName/`)

After receiving the answer, use the Bash tool to list the files in that folder:
```bash
ls "/Users/dianaim/pottery-resume-site/FOLDER_PATH"
```

From the results, automatically separate files into:
- **Images**: anything ending in `.jpg`, `.jpeg`, `.png`, `.webp`
- **Video**: the first file ending in `.mp4`, `.mov`, or `.webm` (or `null` if none)

Show the user what was found and confirm before continuing:
"Found these files — images: [list] / video: [filename or none]. Look right?"

Wait for confirmation before proceeding.

**Question 6 — Quantity**
Ask: "How many do you have available?"

---

## Step 2: Read credentials from .pottery-config

Read the file `/Users/dianaim/pottery-resume-site/.pottery-config` using the Read tool.

Parse these two values:
- `STRIPE_KEY` — the Stripe restricted key
- `SHIPPING_RATE_ID` — the pre-created shipping rate ID

---

## Step 3: Find next item ID

Read `/Users/dianaim/pottery-resume-site/shop.js`. Find the highest `id:` value in the `potteryItems` array. Add 1. That is the new item's ID.

---

## Step 4: Create Stripe product + payment links

Run these four curl commands in sequence using the Bash tool. Replace placeholders with real values.

Set `PRICE_CENTS` = price × 100 (e.g. $30 → 3000).

**4a. Create product**
```bash
curl -s https://api.stripe.com/v1/products \
  -u "STRIPE_KEY:" \
  --data-urlencode "name=ITEM_NAME"
```
Extract `id` from the response → this is `PRODUCT_ID`.

**4b. Create price**
```bash
curl -s https://api.stripe.com/v1/prices \
  -u "STRIPE_KEY:" \
  -d "product=PRODUCT_ID" \
  -d "unit_amount=PRICE_CENTS" \
  -d "currency=usd"
```
Extract `id` from the response → this is `PRICE_ID`.

**4c. Create local delivery payment link (no shipping)**
```bash
curl -s https://api.stripe.com/v1/payment_links \
  -u "STRIPE_KEY:" \
  -d "line_items[0][price]=PRICE_ID" \
  -d "line_items[0][quantity]=1"
```
Extract `url` from the response → this is `LOCAL_URL`.

**4d. Create shipping payment link (US shipping)**
```bash
curl -s https://api.stripe.com/v1/payment_links \
  -u "STRIPE_KEY:" \
  -d "line_items[0][price]=PRICE_ID" \
  -d "line_items[0][quantity]=1" \
  -d "shipping_address_collection[allowed_countries][0]=US" \
  -d "shipping_options[0][shipping_rate]=SHIPPING_RATE_ID"
```
Extract `url` from the response → this is `SHIP_URL`.

If the response to any curl contains an `"error"` key, stop and show the error to the user before continuing.

---

## Step 5: Build the image array

Take the images folder path and the comma-separated filenames. Build a JS array like:
```js
["images/pottery/15_FolderName/IMG_001.jpg", "images/pottery/15_FolderName/IMG_002.jpg"]
```

Trim whitespace from each filename.

---

## Step 6: Build the video value

If the user provided a filename (not "none"), set:
```js
"images/pottery/15_FolderName/IMG_004.mp4"
```

If they said "none", set: `null`

---

## Step 7: Insert new item into shop.js

Use the Edit tool to insert the new item object into `potteryItems` in `/Users/dianaim/pottery-resume-site/shop.js`.

Find the closing `];` of the `potteryItems` array (it appears right before the `// STATE:` comment block). Insert the new item **just before** that `];`.

The new item must be appended after the last existing item. Add a comma after the previous last item's closing `}` if one isn't already there, then add the new object:

```js
  {
    id: NEW_ID,
    name: "ITEM_NAME",
    price: PRICE_NUMBER,
    quantity: QUANTITY_NUMBER,
    images: [IMAGE_ARRAY],
    video: VIDEO_VALUE,
    description: "DESCRIPTION",
    category: "CATEGORY",
    inStock: true,
    stripeLinkLocal: "LOCAL_URL",
    stripeLinkShipping: "SHIP_URL"
  }
```

Rules:
- `id`, `price`, and `quantity` are numbers (no quotes)
- `inStock` is always `true` (no quotes)
- String values use double quotes
- Match the exact formatting style of existing items in the file

---

## Step 8: Commit and push

Run these commands using the Bash tool:

```bash
cd /Users/dianaim/pottery-resume-site && git add shop.js && git commit -m "Add ITEM_NAME listing" && git push
```

---

## Step 9: Print summary

Output a clean summary:

```
✓ New listing added successfully

  ID:       NEW_ID
  Name:     ITEM_NAME
  Price:    $PRICE
  In stock: yes/no
  Local:    LOCAL_URL (or "not set")
  Shipping: SHIP_URL (or "not set")

  Committed and pushed to main.
```
