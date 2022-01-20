import { Plane } from './src/plane.js'
import { Airport } from './src/airport.js'
import { Weather } from './src/weather.js';


//////// Try out creating some instances of classes and using their methods here! /////////


//// For example:

// Create a new plane by passing a name:
const plane1 = new Plane("Cool plane");

// Planes have a default airport of 'unassigned'
console.log(`${plane1.name} is at the airport: ${plane1.airport}`);

// Create a new airport by passing a name:
const airport1 = new Airport("LHR");

// Airports have an empty array of planes by default and a default capacity of 100:
console.log(`${airport1.name} contains the following list of planes:`);
console.log(airport1.planes);
console.log(`${airport1.name} has a capacity of: ${airport1.capacity}`);

// Create an airport with a different capacity:
const airport2 = new Airport("Private airport", 1);
console.log(`${airport2.name} has a capacity of: ${airport2.capacity}`);

// Change the capacity of an airport:
airport2.changeCapacity(2);
console.log(`${airport2.name} now has a capacity of: ${airport2.capacity}`);

// Airports can order a plane to land, changing their airport property to the airport name:
airport2.landPlane(plane1);
console.log(`${plane1.name} is at the airport: ${plane1.airport}`);

// Airports can order a plane to take off, changing their airport to "in flight":

airport2.takeOffPlane(plane1);
console.log(`${plane1.name} is at the airport: ${plane1.airport}`);

// Taking off and landing from an airport returns the plane object:
const myTinyPlane = airport2.landPlane(new Plane("Tiny plane"));
console.log(myTinyPlane);

// IMPORTANT NOTE: it is best to create and label a plane BEFORE using it in airport methods:
airport2.landPlane(new Plane("Broken plane"));
console.log(`${airport2.name} contains the following list of planes:`);
console.log(airport2.planes); // airport now contains a broken plane that can't take off since it has no label to refer to it by


// Take off and landing is restricted to planes that are already at an airport/not already at the airport respectively:
airport2.landPlane(myTinyPlane); // returns warning that plane is already at airport
const myNewPlane = airport2.takeOffPlane(new Plane("Shiny plane")); // returns warning message that plane isn't at the airport
console.log(myNewPlane); // returns error message


// An airport cannot be landed at once it reaches capacity:
const plane3 = new Plane("Huge plane");
airport2.landPlane(plane3);


// By default, airports initialise with a weather code of 0.5, where weather code is between 0 and 1. Code 0.9 or higher indicates stormy while lower indicates sunny.

// The weatherGenerator function of the Weather class can randomly generate weather to be assigned to an airport.
console.log(`Weather code at airport ${airport1.name} is ${airport1.weather}`);
let weatherCode = Weather.weatherGenerator();
console.log(`Newly generated weather code is: ${weatherCode}`);
airport1.weather = weatherCode;
console.log(`New weather code at airport ${airport1.name} is ${airport1.weather}`);

// Use the weatherCodereader function of the Weather class to print the weather code in a readable format:
console.log(`The weather at airport ${airport1.name} is: ${Weather.weatherCodeReader(airport1.weather)}`);





