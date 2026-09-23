function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium = false) {
  let price = quantity * basePrice;

  if (premium) {
    price = price * 1.50;
  }

  return Math.floor(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };