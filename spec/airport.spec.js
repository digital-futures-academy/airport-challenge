const Airport = require("../src/airport.js");
const assertEquals = require("../src/assertEquals.js");

let input, output, airport, result

//Test 1
console.log("Test to see if airport lands plane")
//setup 
airport = new Airport()
input = "Plane A"
//execute
result = airport.landPlane(input)
output = ["Plane A"]
//console.log(result)
//verify
//console.log("Land")
console.log(assertEquals(result.length, 1))
console.log(assertEquals(result, output))


//Test 2
console.log("Test to see if airport can be increased")
//setup
airport = new Airport(40)
input = 60
output = 100
//execute
result = airport.overrideCapacity(input) 
//console.log(result)
//verify
console.log(assertEquals(result, output))


//Test 3
console.log("Test to see if airport doesn't land plane")
//setup 
airport = new Airport(2)
input = "Plane A"
let input1 = "Plane B"
let input2 = "Plane C"
output= ["Plane A", "Plane B"]
//execute
result = airport.landPlane(input)
result1 = airport.landPlane(input1)
result2 = airport.landPlane(input2)
//result = airport.airportCapacity(input)
//console.log(result)
//console.log(result1)
console.log(result2)
//verify
//console.log("airport full")
console.log(assertEquals(result, output))


