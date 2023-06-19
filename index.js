const Airport = require('./src/airport');
const Plane = require('./src/plane');
const Weather = require('./src/weather');

const airport = new Airport("Manchester");
const plane1 = new Plane("Plane1");
const plane2 = new Plane("Plane2");
const plane3 = new Plane("Plane3");
const weather = new Weather();

// Generate a random weather condition
const weatherCondition = weather.randomWeather();
console.log("Current weather:", weatherCondition);

try {
  if (weatherCondition === "stormy") {
    console.log("Due to stormy weather, landing and takeoff are not possible.");
  } else {
    plane1.land(airport);
    console.log("Plane1 has landed at", airport.name);
    plane2.land(airport);
    console.log("Plane2 has landed at", airport.name);
    plane3.land(airport);
    console.log("Plane3 has landed at", airport.name);
    plane1.takeOff(airport);
    console.log("Plane1 has taken off from", airport.name);
    plane2.takeOff(airport);
    console.log("Plane2 has taken off from", airport.name);
  }
} catch (error) {
  console.log("Error:", error.message);
}

console.log("List of planes currently at", airport.name, ":", airport.currentPlanes);
