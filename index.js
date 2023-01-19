const Airport = require("./src/airport");
const Plane = require("./src/Plane");
const Weather = require("./src/Weather");

const weather = new Weather();
const airport = new Airport();
const plane = new Plane(`ID 12345`);

console.log(plane.getID()); // gets plane ID when plane is created

try {
    const planeTwo = new Plane()
}
catch (error) {
    console.log(`${error}`)
}
//Error is thrown when plane is created without an ID

console.log(`==============================================`)

const todaysWeather = weather.getWeather(); // set random weather
console.log(todaysWeather);
const planeThree = new Plane(`ID 6789`);
airport.landPlane(planeThree, todaysWeather);
console.log(airport.isPlaneAtAirport(`ID 6789`)) // this will return true or false dependant on what random weather is set

console.log(`==============================================`)

const airportTwo = new Airport()
console.log(airportTwo.airportCapacity); // default capacity set to 10
airportTwo.increaseCapacity(15); // adds 15 to the airport default capacity
console.log(airportTwo.airportCapacity); // capacity is now 25
airportTwo.decreaseCapacity(24); // decreases capacity by 20
console.log(airportTwo.airportCapacity); // capacity is now 1
const planeFour = new Plane(`ID 1111`);
const planeFive = new Plane(`ID 2222`);
airportTwo.landPlane(planeFour, `sunny`); // capacity is 1 so this plane will land
airportTwo.landPlane(planeFive, `sunny`);// capacity is full so this plane will not land
console.log(airportTwo.isPlaneAtAirport(`ID 1111`)); // returns true
console.log(airportTwo.isPlaneAtAirport(`ID 2222`)); // returns false

console.log(`==============================================`)

const airportThree = new Airport();
const planeSix = new Plane(`ID 4444`)
const planeSeven = new Plane(`ID 5555`)
const planeEight = new Plane(`ID 3456`)
console.log(airportThree.isPlaneAtAirport(`ID 3456`)); // returns false
airportThree.landPlane(planeSix, `sunny`);
airportThree.landPlane(planeSeven, `sunny`);
airportThree.landPlane(planeEight, `sunny`);
console.log(airportThree.isPlaneAtAirport(`ID 5555`)); // returns true
console.log(airportThree.isPlaneAtAirport(`ID 3456`)); // returns true
console.log(airportThree.isPlaneAtAirport(`ID 4444`)); // returns true
airportThree.planeTakeOff(planeSix, `sunny`);
console.log(airportThree.isPlaneAtAirport(planeSix.getID())) // returns false

console.log(`==============================================`)
const airportFour = new Airport()
const planeNine = new Plane(`ID 7777`);
console.log(airport.isPlaneAtAirport(`ID 7777`));
