#!/bin/bash
# ============================================================
# Stripe Payment Links Setup — Pottery Shop
# Compatible with macOS bash 3.x (no associative arrays)
#
# Usage:
#   STRIPE_KEY=rk_live_xxx SHIPPING_RATE_ID=shr_xxx bash setup-stripe-links.sh
# ============================================================

set -e

STRIPE_KEY="${STRIPE_KEY}"
SHIPPING_RATE_ID="${SHIPPING_RATE_ID}"
API="https://api.stripe.com/v1"
OUTPUT_FILE="stripe-links-output.json"

if [ -z "$STRIPE_KEY" ]; then
  echo "Error: STRIPE_KEY is required"
  exit 1
fi

extract() {
  echo "$1" | python3 -c "import sys, json; print(json.load(sys.stdin)['$2'])"
}

check_error() {
  local RESPONSE="$1"
  local CONTEXT="$2"
  if echo "$RESPONSE" | python3 -c "import sys, json; d=json.load(sys.stdin); exit(1 if 'error' in d else 0)" 2>/dev/null; then
    return 0
  else
    echo "ERROR during $CONTEXT:"
    echo "$RESPONSE"
    exit 1
  fi
}

# Create shipping rate if not provided
if [ -z "$SHIPPING_RATE_ID" ]; then
  echo "Creating shipping rate..."
  SHIP_RESPONSE=$(curl -s "$API/shipping_rates" \
    -u "${STRIPE_KEY}:" \
    -d "display_name=Standard Shipping" \
    -d "type=fixed_amount" \
    -d "fixed_amount[amount]=1500" \
    -d "fixed_amount[currency]=usd")
  check_error "$SHIP_RESPONSE" "shipping rate creation"
  SHIPPING_RATE_ID=$(extract "$SHIP_RESPONSE" "id")
  echo "Shipping rate: $SHIPPING_RATE_ID"
fi

echo "Using shipping rate: $SHIPPING_RATE_ID"
echo ""

# Initialize output JSON
echo "{" > "$OUTPUT_FILE"
echo "  \"shippingRateId\": \"$SHIPPING_RATE_ID\"," >> "$OUTPUT_FILE"
echo "  \"items\": {" >> "$OUTPUT_FILE"

ITEM_COUNT=0
TOTAL_ITEMS=11

process_item() {
  local ITEM_ID=$1
  local ITEM_NAME=$2
  local PRICE_CENTS=$3
  ITEM_COUNT=$((ITEM_COUNT + 1))

  echo "[$ITEM_COUNT/$TOTAL_ITEMS] Item $ITEM_ID: $ITEM_NAME"

  # Product
  PRODUCT_RESPONSE=$(curl -s "$API/products" \
    -u "${STRIPE_KEY}:" \
    --data-urlencode "name=${ITEM_NAME}")
  check_error "$PRODUCT_RESPONSE" "product: $ITEM_NAME"
  PRODUCT_ID=$(extract "$PRODUCT_RESPONSE" "id")

  # Price
  PRICE_RESPONSE=$(curl -s "$API/prices" \
    -u "${STRIPE_KEY}:" \
    -d "product=${PRODUCT_ID}" \
    -d "unit_amount=${PRICE_CENTS}" \
    -d "currency=usd")
  check_error "$PRICE_RESPONSE" "price: $ITEM_NAME"
  PRICE_ID=$(extract "$PRICE_RESPONSE" "id")

  # Local pickup link
  LOCAL_RESPONSE=$(curl -s "$API/payment_links" \
    -u "${STRIPE_KEY}:" \
    -d "line_items[0][price]=${PRICE_ID}" \
    -d "line_items[0][quantity]=1")
  check_error "$LOCAL_RESPONSE" "local link: $ITEM_NAME"
  LOCAL_URL=$(extract "$LOCAL_RESPONSE" "url")

  # Shipping link
  SHIP_LINK_RESPONSE=$(curl -s "$API/payment_links" \
    -u "${STRIPE_KEY}:" \
    -d "line_items[0][price]=${PRICE_ID}" \
    -d "line_items[0][quantity]=1" \
    -d "shipping_address_collection[allowed_countries][0]=US" \
    -d "shipping_options[0][shipping_rate]=${SHIPPING_RATE_ID}")
  check_error "$SHIP_LINK_RESPONSE" "shipping link: $ITEM_NAME"
  SHIP_URL=$(extract "$SHIP_LINK_RESPONSE" "url")

  echo "  Local:    $LOCAL_URL"
  echo "  Shipping: $SHIP_URL"

  # Append to JSON (add comma between items, not after last)
  if [ $ITEM_COUNT -lt $TOTAL_ITEMS ]; then
    COMMA=","
  else
    COMMA=""
  fi
  echo "    \"$ITEM_ID\": {\"local\": \"$LOCAL_URL\", \"shipping\": \"$SHIP_URL\"}$COMMA" >> "$OUTPUT_FILE"
  echo ""
}

process_item 2  "blates - pistachio green"          2500
process_item 4  "matcha bowl - blue stripes"         2500
process_item 5  "matcha bowl - green earth"          2500
process_item 6  "bowl - pistachio cream"             2500
process_item 7  "plate - sea blue"                  2500
process_item 9  "matcha bowl - sea blue"             2500
process_item 10 "blates - sea blue"                 3000
process_item 11 "bowl - vanilla cream"              3000
process_item 12 "bowl - vanilla cream II"           3000
process_item 13 "bowl - vanilla cream set of 2"     3000
process_item 14 "pear-shaped vase - matte charcoal" 4500

echo "  }" >> "$OUTPUT_FILE"
echo "}" >> "$OUTPUT_FILE"

echo "============================================================"
echo "Done! Output saved to: $OUTPUT_FILE"
echo "============================================================"
