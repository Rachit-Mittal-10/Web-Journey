const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit-32)*5/9;
  celsius = Math.round(celsius*10);
  celsius = celsius/10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius*1.8 + 32;
  fahrenheit = Math.round(fahrenheit*10);
  fahrenheit = fahrenheit/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
