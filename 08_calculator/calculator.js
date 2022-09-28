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
  let total = 0;
  for (let num = 0; num < array.length; num++) {
    total *= array[num];
  } return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
