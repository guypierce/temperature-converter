// Temperatures are converted from celsius
// (TODO) Add user input functionality for custom tempreture conversion

function output(tempScale, tempName) {
  console.log(`The temperature is ${Math.floor(tempScale)} degrees ${tempName}.`);
}

const kelvin = 283;
const celsius = kelvin - 273;
const newton = celsius * (33 / 100);
const rankine = (celsius + 273.15) * (9 / 5);
const delisle = (100 - celsius) * (3 / 2);
const fahrenheit = celsius * (9 / 5) + 32;

output(fahrenheit, 'Fahrenheit');
output(newton, 'Newton');
output(rankine, 'Rankine');
output(delisle, 'Delisle');