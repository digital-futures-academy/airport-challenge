const Airport = require('./src/airport.js');
const compareFunctions = require('./src/compareFunctions.js');

let airport, result, output, input, input1, result1, fly, planeA, planeB

//TEST 1 check if plane can land
console.log('land plane')
//setup
airport = new Airport()

//execute
result = airport.land("Land plane")
output = ["Land plane"]


//verify
console.log(compareFunctions(result.length, 1))
//console.log(result)
console.log(compareFunctions(result.toString(), output.toString())) 



//TEST 2 A default capacity that can be overridden
console.log('override capacity')
//setup
 airport = new Airport()

//execute
result = airport.changeCapacity(5);
output = 5
//airport.add("capacity increased");

//verify
console.log(result)
console.log(compareFunctions(result, output))




//TEST 3 Airport full
console.log('Airport full')
//setup
airport = new Airport(1)
input = ["planeA", "planeB"]
//input1 = airport.land("planeB")
console.log(input)

//execute
result = airport.airportFull(input)
console.log(airport.airportFull(input))
console.log(result)
//result1 = airport.airportFull(input1)
//console.log(result)
//console.log(result1)
//output = ['Airport full']
//verify
//console.log(compareFunctions(result, output))
//console.log(airport.airport.length <= airport.max)

//TEST 4 Let plane take off & confirm its no longer in airport

//setup
console.log("Plane has taken off and no longer at airport")

airport = new Airport
//result = airport.fly("Plane has taken off and no longer at airport")
//output = ["Plane has taken off and no longer at airport"]

//execute
airport.land(planeA);
airport.land(planeB);

airport.remove(planeA);
//result = airport.land("Land plane")
//result = airport.remove("Take off")
//airport.remove(planeA);
//console.log("Plane has taken off");

//verify
console.log(airport.airport.includes("planeA"));
console.log(airport.airport.length === 1);

//TEST 5 Prevent asking airport to let planes take off that are not at airport/ land plane thats already landed

//setup
console.log('Plane has already taken off');
console.log('Plane has already landed');

airport = new Airport

//execute
airport.land(planeA);
airport.land(planeB);

//verify
console.log((airport.remove(planeA)));
console.log((airport.remove(planeB)));


console.log(airport.airport.length ===1);
