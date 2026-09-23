function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium = false) {
  let price = quantity * basePrice;

  // Task 1: 10% group discount for 5+ tickets
  if (quantity >= 5) {
    price = price * 0.90;
  }

  // Task 4: 50% VIP surcharge
  if (premium) {
    price = price * 1.50;
  }

  // Task 6: flat $10 discount
  price = price - 10;

  // Task 3/5: round instead of truncate
  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };