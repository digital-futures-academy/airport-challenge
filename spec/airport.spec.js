const compare = require('../test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

//TEST 1 create airport and land plane
console.log("create airport and land plane");

let northAirport = new Airport();

let bluePlane = new Plane("Blue Plane");


northAirport.land(bluePlane);


console.log(compare(northAirport.port[0], bluePlane));

//TEST 2 change airport capacity
console.log("change airport capacity");

northAirport.capacity(10);

console.log(compare(northAirport.size, 10));

northAirport.capacity(15);

console.log(compare(northAirport.size, 15));

//TEST 3 prevent landing on full airport
console.log("prevent landing on full airport");

northAirport.capacity(5);

let redPlane = new Plane("Red Plane");
let blackPlane = new Plane("Black Plane");
let purplePlane = new Plane("Purple Plane");
let yellowPlane = new Plane("Yellow Plane");
let orangePlane = new Plane("Orange Plane");

northAirport.land(redPlane);
northAirport.land(purplePlane);
northAirport.land(blackPlane);
northAirport.land(yellowPlane);

console.log(compare(northAirport.port.length, 5));

northAirport.land(orangePlane);

console.log(compare(northAirport.port.length, 5));

//TEST 4 allow plane to take off
console.log("allow plane to take off");

northAirport.takeOff(yellowPlane);

console.log(compare(northAirport.port.length, 4));
console.log(compare(northAirport.port.includes(yellowPlane), false));
console.log(northAirport);

//TEST 5 plane needs to be present at airport to take off
console.log("plane needs to be present at airport to take off");

let pinkPlane = new Plane("Pink Plane");

northAirport.takeOff(pinkPlane);

console.log(compare(northAirport.port.length, 4));

//TEST 5 cant land plane that is already landed
console.log("cant land plane that is already landed");

northAirport.land(bluePlane);

console.log(compare(northAirport.port.length, 4));

//TEST 6 checking the weather changes randomly
console.log("checking the weather");

northAirport.weather();

console.log(northAirport.state);

northAirport.weather();

console.log(northAirport.state);

northAirport.weather();

console.log(northAirport.state);

//TEST 7 prevent take off during stormy weather
console.log("prevent take off during stormy weather");


while (northAirport.state === "Sunny" ) {

    northAirport.weather();

}

northAirport.takeOff(bluePlane);

console.log(northAirport.port.includes(bluePlane));

//TEST 8 prevent landing during stormy weather
console.log("prevent landing during stormy weather");


northAirport.land(pinkPlane);

console.log(!northAirport.port.includes(pinkPlane));

//TEST 9 count how many planes are currently landed on an airport
console.log("count how many planes are currently landed on an airport");

console.log(`North Airport currently has ${northAirport.landed} planes landed on port`);

console.log(compare(northAirport.landed, 4));

//TEST 10 dont allow a landed plane to land
console.log("dont allow a landed plane to land");

let southAirport = new Airport();

southAirport.land(bluePlane);

console.log(southAirport);

console.log(compare(southAirport.port.length, 0));










