const { assertEquals } = require("./test-framework");
const Plane = require("../src/Plane");
const Airport = require("../src/Airport")

console.log(`________________________`);
console.log(`USER STORY 5 TESTS`);
console.log(`------------------------`);

let expected, actual, result;

console.log(`US5 TEST 1`)
console.log(`A plane that is already present in the airport cannot be landed and added to the hangar.`);
console.log(`----------------------------------------------------`);

let Voyager = new Plane('Voyager')
let airport1 = new Airport([Voyager]);

expected = 1

airport1.landNewPlane(Voyager);

actual = airport1.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 1 - hangar array does not increase in length when already existing plane is landed: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`US5 TEST 2`)
console.log(`A plane that is not present cannot depart from the airport - hangar array length is unchanged`);
console.log(`----------------------------------------------------`);

expected = 1;

let Enterprise = new Plane('Enterprise');
airport1.departPlane(Enterprise);

actual = airport1.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 2 - hangar array does not change in length when non existing plane is departed: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);
