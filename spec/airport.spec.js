const assertEquals = require('./../src/test-framework.js')
const Airport = require('../src/airport.js')

//const assertEquals = require('./../src/test-framework.js')
//const Airport = require('../src/airport.js')


//--------------Test 1
let airport, result
//SETUP
airport = new Airport()
// created an instance of class
//EXECUTE 
result = airport.land("plane")
// - function being executed is land
//VERIFY
console.log("can land plane in airport")
console.log(assertEquals(result.length, 1))

// created a variable result and airport
// length = string "plane"
//test 2 ------------------
let airport1, result1
//SETUP 
//EXECUTE -- reassign the capacity to 10
airport1 = new Airport(10)
//VERIFY -- want to verify that airport capacity is = 10
console.log("can we reassign the airport capacity")
console.log(assertEquals(airport1.maxCapacity, 10))
//

// test 3------------------
let airport2, result2
//SETUP

airport2 = new Airport()

airport2.land("plane")
airport2.land("plane2")
airport2.land("plane3")
airport2.land("plane4")
airport2.land("plane5")


// created an instance of class
//EXECUTE 
// i'm testing to see if you can add a 6th plane which is beyond the capicity 
result2 = airport2.land("plane20")


// - function being executed is land - landing plane 6 should come back false
//VERIFY
console.log("cannot land plane beyond capacity")
//console.log(airport2.plane) - this shows us the array (i needed visibility on the error)
console.log(assertEquals(airport2.plane.length, 5))
// airport is the object, inside of object we have an array of planes then we called the airport and counted the length of the planes (plane is inside of airport)
//test 4---------------
let airport3 = new Airport
let result3

//SETUP --
//-- As an air traffic controller, 
// So I can get passengers on the way to their destination
//I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
airport3.land("plane20")
result3 = airport3.takeOff("plane20")
//EXECUTE
console.log("can this airplane take off")
console.log(assertEquals(result3.length, 0))

//test 5 -----------------


//SETUP
let airport4 = new Airport
let result4
airport4.land('plane1')
//EXECUTE
result4 = airport4.land('plane1')
//verify
console.log("cannot land plane that has already landed")
console.log(assertEquals(airport4.plane.length, 1))

//setup - the point of this test is that we want to make sure that the plane hasn't already taken off 
let airport5 = new Airport
let expectedResult = "the plane has taken off"

//execute
let actualResult = airport5.takeOff("plane")
//verify
console.log("cannot takeoff plane that has already taken off")
console.log(assertEquals(expectedResult, actualResult))

// make sure it doesnt take off a plane that has already landed


