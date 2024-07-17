const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
	let x = 1;
  for (i = 0; i < b; i++) {
    x = x * a;
  };
  return x;
};

const factorial = function(a) {
  let arr = [];
  for (i = 1; i <= a; i++) {
    arr.push(i);
  };
  let x = arr.reduce((total, next) => total * next, 1);
  return x;
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
