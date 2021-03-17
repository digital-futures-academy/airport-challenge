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
airport = new Airport('Gatwick', 7)

//EXECUTE

//VERIFY
console.log(assertEquals(7, airport.maxCapacity))

//PART 3
//SETUP
airport = new Airport('Gatwick', 2)
plane1= new Plane('747')
plane2=new Plane ('Concorde')
plane3=new Plane ('737')

//EXECUTE
airport.addPlane(plane1)
airport.addPlane(plane2)
airport.addPlane(plane3)

//VERIFY
console.log(assertEquals(airport.hanger.length, 2))


//PART 4
//SETUP
airport = new Airport('Luton')

//EXECUTE
airport.addPlane(plane1)
airport.addPlane(plane2)
airport.removePlane(plane1)

//VERIFY
console.log(assertEquals(airport.hanger[0], plane2))
console.log(assertEquals(airport.hanger.length, 1))


//PART 5
//SETUP
airport = new Airport('Luton')

//EXECUTE
airport.addPlane(plane1)
airport.addPlane(plane2)
let result=airport.removePlane(plane3)

//VERIFY
console.log(assertEquals('plane not in hanger', result))