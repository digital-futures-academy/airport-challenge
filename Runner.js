const Airport = require('./src/airport');

let airport = new Airport(2)                        //Capacity 2, with random weather and empty airport

console.log(airport.landing('plane A'));            //Should land plane
console.log(airport.landing('plane A'));            //Can't land duplicate
console.log(airport.landing('plane B'));            //Should land plane
console.log(airport.landing('plane C'));            //At capacity
console.log(airport.getRunway())                    //Prints plane A and plane B
console.log(airport.takeOff('plane B'));            //Should say Plane B has taken off
console.log(airport.landing('plane C'));            //Should land plane c

console.log(airport.getRunway())                    //print plane A and plane C

