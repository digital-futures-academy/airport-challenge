const assertEquals=require('./../test.js')
const Airport = require('./../src/airport.js')
const Plane = require('./../src/plane.js')

let plane1, plane2, plane3, airport

//PART 1
//SETUP
plane1= new Plane('747')
airport = new Airport('Heathrow')

//EXECUTE
airport.addPlane(plane1)

//VERIFY
console.log(assertEquals(airport.hanger[0], plane1))

//PART 2
//SETUP
airport = new Airport('Gatwick', 2)
plane1= new Plane('747')
plane2=new Plane ('Concorde')
plane3=new Plane ('737')

//EXECUTE
airport.addPlane(plane1)
airport.addPlane(plane2)
airport.addPlane(plane3)
console.log(airport.hanger)

//VERIFY
console.log(assertEquals(airport.hanger.length, 2))