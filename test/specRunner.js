console.log(`Run all test cases....`);

console.log(`\nCriteria 1`);
require("./landPlane.spec");

console.log(`\nCriteria 2`);
require("./overrideCapacity.spec");

console.log(`\nCriteria 3`);
require("./isAirportFull.spec");

console.log(`\nCriteria 4`);
require("./takeOffPlane.spec");

console.log(`\nCriteria 5`);
require("./checkPlane.spec");

console.log(`\nExtended Criteria 1`);
require("./checkWeatherTakeOff.spec");

console.log(`\nExtended Criteria 2`);
require("./checkWeatherLand.spec");
