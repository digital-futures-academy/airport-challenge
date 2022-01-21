const Airport = require('./src/airport');

let airport = new Airport(2)

console.log(airport.landing('plane A'));
console.log(airport.landing('plane A'));
console.log(airport.landing('plane B'));
console.log(airport.landing('plane C'));
console.log(airport.getRunway())
console.log(airport.takeOff('plane B'));
console.log(airport.landing('plane C'));

console.log(airport.getRunway())

