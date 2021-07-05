const Airport = require("../src/airport.js");
const assertEquals = require("../src/assertEquals.js");

let input, input1, input2, input3, output, airport, result, expectedOutput

//Test 1
console.log("Test to see if airport lands plane")
//setup 
airport = new Airport()
input = ["Plane A"]
//execute
result = airport.landPlane(input)
output = ["Plane A"]
//console.log(result)
//verify
console.log(assertEquals(result.length, 1))
console.log(assertEquals(result, output))


//Test 2
console.log("Test to see if airport can be increased")
//setup
airport = new Airport(40)
input = 60
//execute
result = airport.overrideCapacity(input) 
output = 100
//console.log(result)
//verify
console.log(assertEquals(result, output))


//Test 3
console.log("Test to see if airport doesn't land plane")
//setup 
airport = new Airport(2)
input = ["Plane A"]
input1 = ["Plane B"]
input2 = ["Plane C"]
expectedOutput= ["Plane A", "Plane B"]

//execute
result = airport.landPlane(input)
result1 = airport.landPlane(input1)
result2 = airport.landPlane(input2)
output = "Airport is full. Do not land Plane C"
//result = airport.airportCapacity(input)
//console.log(result)
//console.log(result1)
//console.log(result2)
//verify
console.log(assertEquals(result, expectedOutput))
console.log(assertEquals(result2, output))


//Test 4
console.log("Test to see if plane has taken off and is no longer in the airport")
//setup 
airport = new Airport(5)
input = airport.landPlane(["Plane A"])
input1 = airport.landPlane(["Plane B"])
input2 = airport.landPlane(["Plane C"])
input3 = airport.landPlane(["Plane D"])
expectedOutput = ["Plane B", "Plane C", "Plane D"]
//console.log(input)
//execute 
result = airport.takeOff(["Plane A"])
output =  "Plane A has taken off and is no longer in the airport"
//console.log(result)
//verify 
console.log(assertEquals(result, output))


//Test 5
console.log("Test to see if a plane is already grounded before asking it to land")
//setup 
airport = new Airport(5)
input = airport.landPlane(["Plane A"])
input1 = airport.landPlane(["Plane B"])
input2 = airport.landPlane(["Plane C"])
//execute 
result = airport.landPlane(["Plane A"])
output = "Plane A is already in the airport"
//verify 
console.log(assertEquals(result, output))


//Test 6
console.log("Test to see if a plane is at the airport before telling it to take off")
//setup 
airport = new Airport(5)
input = airport.landPlane(["Plane A"])
input1 = airport.landPlane(["Plane B"])
input2 = airport.landPlane(["Plane C"])
//execute 
result = airport.takeOff(["Plane D"])
output = "Plane D cannot take off, it is not in the airport"
//verify 
console.log(assertEquals(result, output))