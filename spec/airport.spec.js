const Airport = require("../src/airport.js");
const assertEquals = require("../src/assertEquals.js");

let input, output, airport, result

//Test 1
console.log("Test to see if airport lands plane")
//setup 
airport = new Airport()
input = ["Plane A"]
//execute
result = airport.landPlane(["Plane A"])
output = ["Plane A"]
//console.log(result)
//verify
//console.log("Land")
console.log(assertEquals(result.length, 1))
console.log(assertEquals(result, output))