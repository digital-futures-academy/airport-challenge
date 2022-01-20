const { Airport } = require("./src/Airport")

const airport = new Airport;

console.log(`No. of planes at airport: ${airport.plane.length}`)
console.log(`Current maximum capacity at airport: ${airport.capacity}`)

airport.landPlaneToAirport("123")

airport.landPlaneToAirport("456")

console.log(`List of planes at airport after landing 2 planes: ${airport.plane}`)

airport.changeCapacity(3); //default is 2, changing it 3

console.log(`Updated maximum capacity at airport: ${airport.capacity}`)

const count = airport.countPlane();

console.log(`Number of planes at the airport: ${count}`);

airport.changeWeather(); //default is not storm; calling this function to randomly determine whether it's going to have storm or not; if not, it will be able to take off

console.log(`Is there a storm?: ${airport.stormy}`)

airport.takeOffPlaneFromAirport("123")

console.log(`List of planes at airport after 1 plane took off: ${airport.plane}`) //There will be 1/6 chance for there to be a storm. If there's a storm, plances won't be able to take off. Refresh the program again to see what happens if there is and there is no storm.