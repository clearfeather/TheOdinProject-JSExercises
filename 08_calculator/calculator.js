const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let total = 0;
	for (let num of array) {
    total += num;
  } return total;
  //or use: return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  let total = 1;
  for (let num of array) {
    total *= num;
  } return total;
  //or use: return array.length ? array.reduce((total, current) => total * current) : 0;
};

const power = function(num, exp) {
	return Math.pow(num,exp);
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
	for (let i = num -1; i >= 1; i--) {
    num *= i;
  } return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
