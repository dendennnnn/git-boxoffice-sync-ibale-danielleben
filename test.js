const tickets = require('./tickets');

let failures = 0;

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.log(`FAIL: ${label} - expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(3), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(21), false, 'an order over 20 tickets is invalid');

const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 47, 'price for 3 tickets at $15.50 each');

const groupPrice = tickets.calculateTicketPrice(5, 20);
assertEqual(groupPrice, 90, '10% group discount for 5 tickets');

const roundedPrice = tickets.calculateTicketPrice(3, 15.6);
assertEqual(roundedPrice, 47, 'price rounds to nearest whole number');

process.exitCode = failures > 0 ? 1 : 0;