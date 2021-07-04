const compare = require('../test-framework');
const Plane = require('../src/plane');

//TEST 1 create plane
console.log("create plane");

let bluePlane = new Plane("Blue Plane");

console.log(compare(bluePlane.name, "Blue Plane"));

//TEST 2 check if a plane is landed or not
console.log("check if a plane is landed or not");

console.log(compare(bluePlane.isLanded(), false));

bluePlane.land();

console.log(compare(bluePlane.isLanded(), true));

