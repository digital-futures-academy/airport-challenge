const Airport = require('./airport.js');
const compare = require('./compareFunction.js');

let airport, result

//TEST 1 check if plane can land

//setup
let airport = new Airport()
let plane = new Plane()

//execute
result = airport.land("Land plane")
//airport.add("land")

//verify
console.log("Land plane")

//console.log(plane.plane.includes("land"));

//console.log(compare(airport.airport.length, 1));


//TEST 2 A default capacity that can be overridden

//setup
let airport = new Airport()

//execute

airport.increaseCapacity(5);

airport.add(plane);
airport.add(plane);
airport.add(plane);
airport.add(plane);
airport.add(plane);
airport.add(plane);

//airport.add("capacity increased");

//verify
console.log("Capacity can be increased")


//console.log(compare(airport.airport.length, 1));



//TEST 3 Airport full

//setup
let airport = new Airport()
let plane = new Plane()

//execute

//verify
console.log(airport.airport.length <= airport.max)

//TEST 4 Let plane take off & confirm its no longer in airport



//TEST 5 Prevent asking airport to let planes take off that are not at airport/ land plane thats already landed
