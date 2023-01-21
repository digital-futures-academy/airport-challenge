const Airport = require('./src/airport');
const Plane = require('./src/plane');
const plane = require('./src/plane');

let airport;

console.log('====================');

airport = new Airport();

console.log(`The airport is empty and there are currentley ${airport.slotsOccupied.length} slots occupied.`)

airport.addPlane(new Plane('Plane1'));
airport.addPlane(new Plane('Plane2'));

console.log(`2 aircraft labeled`)
console.log(airport.slotsOccupied)
console.log(`have landed`);

airport.addPlane(new Plane('Plane1'));

console.log('Due to an error another plane was given the same label as one at the airport, this has been prevented from landing')

console.log(airport.slotsOccupied)

airport.removePlane(new Plane('Plane3'))

console.log('And a further error has meant that an plane with a label that does not exist has been asked to take off, the system has prevented this from causing one of the Planes currently at the airport from taking off')

console.log(airport.slotsOccupied)

airport.removePlane(new Plane('Plane1'))

console.log('Plane1 has taken off and left only Plane2 at the airport')

console.log(airport.slotsOccupied)
console.log('====================')

