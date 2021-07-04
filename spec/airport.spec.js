const Airport = require (  './../src/airport')
const Plane = require ('./../src/plane')
const assertEquals= require ('./../test-framework')
let input, exOutput, actOutput;
console.log('Test number 1 for landing a plane, with airport with no cap');
//Setup 
input0 ='plane0';
exOutput0 = true;
cap0 = 10;

let myPlane0 = new Plane(input0);
let myAirport0 = new Airport(cap0);
//Execute

//console.log(myPlane0)


myAirport0.landPlane(myPlane0);

//console.log(myAirport0.airportList)

//Verify
if (myAirport0.airportList.indexOf(myPlane0) === -1) {
    actOutput0 = false;
}
else{
    actOutput0 = true;
}
console.log(' if true then plane is in airport array')
console.log(assertEquals(actOutput0,exOutput0));
//Works

console.log('I want to see if I can Override my cap')

//Setup
cap1 = 1
input1 = 0
exOutput1 = 1
//Creating Airport with cap 10
let myAirport1 = new Airport(cap1)
//console.log(myAirport1.cap)
//Execute
//Changing Airport1 to cap = 11
console.log("overriding cap to 11 planes")
myAirport1.overrideCap(input1)
//Verify
actOutput1 = myAirport1.cap
//Checking some stages to see where something could go wrong
console.log(actOutput1)
result1 = assertEquals(exOutput1,actOutput1)
console.log(result1)
//Works


console.log('Testing If airport is full then do not allow planes to land, this case shows that planes can be added until it is full and are stopped after its full')
//Setup

cap2 = 1
input2 = 'A plane'
exOutput2 = true
input2_2 = 'A massive spec of dust RUUUNN'
// Creating both plane and airport 2
let myAirport2 = new Airport(cap2)
let myPlane2 = new Plane(input2)
let myPlane2_2 = new Plane(input2_2)
//Execute

myAirport2.landPlane(myPlane2)
myAirport2.landPlane(myPlane2_2)

//Verify
actOutput2 = myAirport2.isFull()



result1 = assertEquals(exOutput2,actOutput2)
console.log('If true then airport is full')
console.log(result1)

console.log(' This is the planes currently in the airport')
console.log(myAirport2.airportList)


console.log('This section is for User Stories 4 and also the first part of User Stories 5 (5.1)')
//Setup

input4 = "a plane"
cap4 = 10 // in this case the cap is large so that I can land planes and remove them
exOutput4 = "the plane is no longer in the airport"
exOutput4_2 = "this plane is not at this Airport"
input4_2 = "a plane with a turtle"
input4_3 = "a plane with an apple"

let myAirport4 = new Airport (cap4)
let myPlane4 = new Plane(input4)
let myPlane4_2 = new Plane (input4_2)
let myPlane4_3 = new Plane (input4_3)
//Execute
console.log("3 Planes are landing")
myAirport4.landPlane(myPlane4)
myAirport4.landPlane(myPlane4_2)
myAirport4.landPlane(myPlane4_3)
console.log("We think 2 planes have left captain")

actOutput4 = myAirport4.takeOff(myPlane4)

console.log(`myPlane2_2 isn't even in the airport captain??`)
actOutput4_2 = myAirport4.takeOff(myPlane2_2)
console.log ("   ")

 
//Verify
console.log("Can we confirm myPlane4 was at the airport before take off?")
console.log(actOutput4)
console.log(result4 = assertEquals(exOutput4,actOutput4))
console.log("Cna we confirm myPlant4_2 was at the airport before take off?")
console.log(actOutput4_2)
console.log(result4_2 = assertEquals(exOutput4_2,actOutput4_2))

console.log("Testing if the plane has already landed or not From User Story 5")

//Setup
input5 = "a plane"
input5_2 = "a Duck"
cap5 = 10
exOutput5 = 3


let myPlane5 = new Plane (input5)
let myPlane5_2 = new Plane (input5_2)
let myAirport5 = new Airport(cap5)

//Execute
console.log ( "adding 3 planes")
console.log("plane 0")
myAirport5.landPlane(myPlane5) 
console.log("first plane")
myAirport5.landPlane(myPlane5)
console.log("second plane")
myAirport5.landPlane(myPlane5_2)

//Verify
console.log(myAirport5._airportList.length)







