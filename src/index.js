const Weather = require('../src/weather');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

let airport, plane1, weather;

airport = new Airport;
plane1 = new Plane('pl1');
weather = new Weather;

console.log(`Plane will attempt to land depending on the weather conditions`);
console.log(``);

weather.weatherReport();

console.log(`Weather Conditions: ${weather.weatherStatus}`);

airport.setWeather(weather.weatherStatus);

console.log(``);
console.log(`Attempting to land plane`);
console.log(``);

try {
    airport.landPlane(plane1);
}
catch (e) {
    if (e instanceof Error) {
        console.log(`!Landing Error! - stormy weather conditions`)
    };
}
finally {
    console.log(``);
    console.log("Planes in airport: ");
    console.log(airport.airportPlaneList);
}




