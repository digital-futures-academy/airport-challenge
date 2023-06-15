const { weather } = require("./weather");
const { airport } = require("./airport");
const { plane } = require("./plane");

weatherToday = weather.setWeather();
console.log(`The weather at Heathrow airport today is : ${weatherToday}`);

console.log(airport.maxAirportCapacity); // default maxAirportCapacity.
airport.setMaxAirportCapacity(3000);
console.log(airport.maxAirportCapacity); // maxAirportCapacity is overridden using setAirportCapacity.

airport.planesAtAirport = ["78910"]
planeID = "123456"
planeLanded = airport.landPlane(planeID); // Plane lands only if it is sunny AND plane is not already at the airport.
console.log(`Did plane ${planeID} land? ${planeLanded}`);
console.log(`The planes currently at the airport are: ${airport.planesAtAirport}`); // If the plane lands, the planesAtAirport array is updated.
console.log(airport.currentAirportCapacity()) // If the plane lands, the currentAirportCapacity should increase.

planeDeparted = airport.planeTakeOff(planeID)
console.log(`Did the plane take off? ${planeDeparted}`) // Plane takesOff only if it is sunny AND plane is at the airport.
console.log(`The planes currently at the airport are: ${airport.planesAtAirport}`) // If plane takesOff and leaves the airport, the planesAtAirport array is updated. 
console.log(airport.currentAirportCapacity()) // If plane takesOff and leaves the airport, the currentAirportCapacity is also updated.


airport.setMaxAirportCapacity(2);
console.log(`maxAirportCapacity is: ${airport.maxAirportCapacity}`);
airport.planesAtAirport = ["111", "222"];
console.log(airport.maxAirportCapacity);
console.log(`Is the airport full? ${airport.isFull()}`);
didPlaneLand = airport.landPlane("333");
console.log(`Did the plane land when airport was full? ${didPlaneLand}`); // Plane will not land if the airport is full.

console.log("Thank you for travelling with Heathrow Airport. Safe travels!")