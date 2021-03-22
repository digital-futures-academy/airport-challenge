Test = require('./src/airport-test.js')
Airport = require('./src/airport.js')
Airplane = require('./src/airplane-class.js')

let exampleAirport = new Airport()
let examplePlane = new Airplane()

//test if plane can be landed
exampleAirport.land(examplePlane)
let test1 = new Test()
console.log(test1.assertEquals(exampleAirport.checkIfAtAirport(examplePlane), true))

//test if capacity can be changed
exampleAirport.changeCapacity(10)
let test2 = new Test()
console.log(test2.assertEquals(exampleAirport.maxCapacity, 10))

//test if plane can be landed if airport is full
exampleAirport.changeCapacity(5)
let examplePlane2 = new Airplane
let examplePlane3 = new Airplane
let examplePlane4 = new Airplane
let examplePlane5 = new Airplane
let examplePlane6 = new Airplane
let examplePlane7 = new Airplane
exampleAirport.land(examplePlane2)
exampleAirport.land(examplePlane3)
exampleAirport.land(examplePlane4)
exampleAirport.land(examplePlane5)
exampleAirport.land(examplePlane6)
exampleAirport.land(examplePlane7)
let test3 = new Test()
console.log(test3.assertEquals(exampleAirport.land("airplane8"), 'airport at full capacity'))

//test if plane can be landed if airport is full
exampleAirport.takeoff(examplePlane)
let test4 = new Test()
console.log(test4.assertEquals(exampleAirport.checkIfAtAirport(), false))

//test if plane not at the airport can take off
let examplePlane8 = new Airplane
let test5 = new Test()
console.log(test5.assertEquals(exampleAirport.takeoff(examplePlane8), 'airplane not at airport'))

//test if plane can land if already at Airport
let test6 = new Test()
//exampleAirport.takeoff("airplane3")
console.log(test6.assertEquals(exampleAirport.land(examplePlane2), 'airplane already at airport'))

//test if plane can take off if weather is stormy
let weatherToday = new Weather(1, 1)
//example


//test if plane can land if weather is stormy


//test if presence at airport congruent with flight/landed status of plane
