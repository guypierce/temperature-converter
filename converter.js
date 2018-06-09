// Tempretures are converted from celsius
const kelvin = 283; //kelvin tempreture for today
const celsius = kelvin - 273; // celcius is 273 degrees less than kelvin
const newton = celsius * (33/100);
const rankine = celsius + 273.15 * (9/5);
const fahrenheit = celsius * (9/5) + 32; // celcius to fahrenheit equation
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);
console.log(`The temperature is ${Math.floor(newton)} degrees Newton.`);
