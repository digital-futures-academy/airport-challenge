let AssertEquals = require('../src/test-framework');
let Airport = require('../src/airport');
let Plane = require('../src/plane');
let testFramework = new AssertEquals();
let heathrow = new Airport('Heathrow');
heathrow.storminess = 1;
let boeing747 = new Plane('Boeing747');
let concorde = new Plane('Concorde');

console.log('Tests to check weather safety/extension domains - 5a - Is takeoff prevented when weather is stormy(Does heathrow.storminess >= 10 mean planeTakeOff() gives warning string');
//Setup
heathrow.landPlane(boeing747);
heathrow.storminess = 10;
let expectedOutput5a = 'Storms are at a 10 level - too dangerous to take off';
//Execute
let actualOutput5a = heathrow.takeOffPlane(boeing747);
//Validate
let result5a = testFramework.test(expectedOutput5a,actualOutput5a);
console.log(result5a);

console.log('5b - Is plane kept at airport when weather too stormy?');
//Setup
let expectedOutput5b = 'Heathrow';
//Execute
let actualOutput5b = boeing747.planeIsLandedHere;
//Validate
let result5b = testFramework.test(expectedOutput5b,actualOutput5b);
console.log(result5b);

console.log('5c - Is landing prevented when weather is stormy(Does heathrow.storminess >= 10 mean landPlane() gives warning string');
//Setup
heathrow.storminess = 10;
let expectedOutput5c = 'Storms are at a 10 level - too dangerous to land';
//Execute
let actualOutput5c = heathrow.landPlane(concorde);
//Validate
let result5c = testFramework.test(expectedOutput5c,actualOutput5c);
console.log(result5c);

console.log('5d - Is plane kept unlanded when weather too stormy?');
//Setup
let expectedOutput5d = 'Nowhere';
//Execute
let actualOutput5d = concorde.planeIsLandedHere;
//Validate
let result5d = testFramework.test(expectedOutput5d,actualOutput5d);
console.log(result5d);
