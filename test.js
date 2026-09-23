const tickets = require('./tickets');

let failures = 0;

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} - expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(
  tickets.isValidQuantity(4),
  true,
  'a normal order quantity is valid'
);

assertEqual(
  tickets.isValidQuantity(0),
  false,
  'a zero quantity is invalid'
);

assertEqual(
  tickets.isValidQuantity(25),
  false,
  'an order over 20 tickets is invalid'
);

// 3 × $15.50 = $46.50
// - $10 flat discount = $36.50
// Math.round = $37
const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 37, 'price for 3 tickets at $15.50 each');

// $100 - 10% group discount = $90
// $90 - $10 flat discount = $80
const groupPrice = tickets.calculateTicketPrice(5, 20);
assertEqual(groupPrice, 80, '10% group discount for 5 tickets');

// 3 × $15.60 = $46.80
// - $10 = $36.80
// Math.round = $37
const roundedPrice = tickets.calculateTicketPrice(3, 15.6);
assertEqual(roundedPrice, 37, 'price rounds to nearest whole number');

// 2 × $20 = $40
// 50% VIP surcharge = $60
// - $10 = $50
const vipPrice = tickets.calculateTicketPrice(2, 20, true);
assertEqual(vipPrice, 50, '50% VIP surcharge for premium seating');

// $10 flat discount
const flatDiscountPrice = tickets.calculateTicketPrice(3, 20);
assertEqual(flatDiscountPrice, 50, '$10 flat discount');

process.exitCode = failures > 0 ? 1 : 0;