const convertToCelsius = function(x) {
  let temp = (x - 32) * (5 / 9);
  let roundTemp = Number(temp.toFixed(1));

  return roundTemp;
};

const convertToFahrenheit = function(x) {
  let temp = x * (9 / 5) + 32;
  let roundTemp = Number(temp.toFixed(1));

  return roundTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
