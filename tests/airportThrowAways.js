const Airport = require("../src/airport");

//This is code for where I check random things

const airport1 = new Airport();
// airport1.landPlane(null)
// airport1.landPlane('notNull');
// airport1.landPlane(true);
// console.log(airport1.planesArray);

// item = [];
// console.log(item[0]);



const randomNumber = Math.floor((Math.random() * 5));
console.log(randomNumber)
let weather = ''
switch (randomNumber) {
    case 0:
        weather = 'Stormy';
        break;
    case 1:
        weather = 'Sunny';
        break;
    case 2:
        weather = 'Light Breeze';
        break;
    case 3:
        weather = 'Rain';
        break;
    case 4:
        weather = 'Snow';

}

console.log(weather)


const Weather = require(`../src/weather`);

const weather = new Weather;

console.log(weather.getForecast());

console.log(weather.getForecast());

//ayyyyyy weather is only randomized when new instance is created not when getForecast is called
