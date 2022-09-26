// fahrenheit to celsius
const ftoc = function(f) {
  // [°C] = ([°F] − 32) × 5⁄9
  c = ((f - 32) * 5/9);
  return Math.round(c * 10) / 10;
};

// celsius to fahrenheit
const ctof = function(c) {
  // [°F] = [°C] × 9⁄5 + 32
  f = ((c * 9/5) + 32);
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
