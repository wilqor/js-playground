// temp in Kelvins
var kelvinTemp = 301;
// converted to Celsius
var celsiusTemp = kelvinTemp - 273.15;
// converted to Fahrenheit
var fahrenheitTemp = celsiusTemp * (9/5) + 32;
fahrenheitTemp = Math.floor(fahrenheitTemp);
// round up: Math.ceil()
// round: Math.round()
console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit');
