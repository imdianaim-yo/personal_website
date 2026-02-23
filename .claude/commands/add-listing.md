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

**Question 4 — Description**
Ask: "Write the description." Remind the user: lowercase, conversational, match the existing style in shop.js (e.g. "hand-thrown stoneware bowl in sage green glaze. fired at cone 10. 6 in diameter; 3 in height.")

**Question 5 — Images folder path**
Ask: "What's the images folder path?" (e.g. `images/pottery/15_FolderName/`)

**Question 6 — Image filenames**
Ask: "List the image filenames, comma-separated." (e.g. `IMG_001.jpg, IMG_002.jpg, IMG_003.jpg`)

**Question 7 — Video filename**
Ask: "Video filename? Type 'none' if there isn't one." (e.g. `IMG_004.mp4`)

**Question 8 — In stock?**
Ask: "Is this item in stock?" with options: `yes`, `no`

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

## Step 4: Create Stripe product + payment links (only if inStock = yes)

If the user said **yes** to in stock, run these four curl commands in sequence using the Bash tool. Replace placeholders with real values.

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

If the user said **no** to in stock, set `LOCAL_URL = null` and `SHIP_URL = null`.

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
    images: [IMAGE_ARRAY],
    video: VIDEO_VALUE,
    description: "DESCRIPTION",
    category: "CATEGORY",
    inStock: INSTOCK_BOOLEAN,
    stripeLinkLocal: LOCAL_URL_OR_NULL,
    stripeLinkShipping: SHIP_URL_OR_NULL
  }
```

Rules:
- `id` is a number (no quotes)
- `price` is a number (no quotes)
- `inStock` is `true` or `false` (no quotes)
- String values use double quotes
- If `stripeLinkLocal` or `stripeLinkShipping` are null, write `null` (no quotes)
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
