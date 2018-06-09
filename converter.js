// Tempretures are converted from celsius
// (TODO) Add user input functionality for custom tempreture conversion
const kelvin = 283;
const celsius = kelvin - 273;
const newton = celsius * (33/100);
const rankine = celsius + 273.15 * (9/5);
const delisle = 100 - celsius * (3/2);
const fahrenheit = celsius * (9/5) + 32; // celcius to fahrenheit equation
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);
console.log(`The temperature is ${Math.floor(newton)} degrees Newton.`);
console.log(`The temperature is ${Math.floor(rankine)} degrees rankine.`);
console.log(`The temperature is ${Math.floor(delisle)} degrees delisle.`);
