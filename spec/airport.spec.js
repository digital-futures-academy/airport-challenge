const Airport = require("../src/airport.js");
const assertEquals = require("../src/assertEquals.js");

let input, output, airport, result

//Test 1
console.log("Test to see if airport lands plane")
//setup 1 item
airport = new Airport()
input = ["Plane A"]
//execute 1 item
result = airport.landPlane(["Plane A"])
output = ["Plane A"]
//console.log(result)
//verify 1 item
//console.log("Can add one item")
//console.log(assertEquals(total.length, 1))
console.log(assertEquals(result, output))