const Plane = require('./src/plane');
const Airport = require('./src/airport');

let plane1 = new Plane("1");
let airport1 = new Airport("Heathrow");

plane1.land(airport1);
console.log(plane1.status); // 'landed'
console.log(plane1.currentLocation); // 'Heathrow'

plane1.takeOff(airport1);
console.log(plane1.status); // 'in_air'
console.log(plane1.currentLocation); // null
