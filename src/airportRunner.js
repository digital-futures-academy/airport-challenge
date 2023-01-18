const Airport = require('./airport')
const Plane = require('./Plane')

const Heathrow = new Airport()
Heathrow.addPlane(new Plane('IranAir'))
Heathrow.addPlane(new Plane('Virgin'))
console.log(Heathrow.landedList.length)

const Gatwick = new Airport()
Gatwick.addPlane(new Plane('British Airways'))
console.log(Gatwick.landedList)

let airport = new Airport()
let plane = new Plane(2)
console.log()
airport.addPlane(plane)
console.log(airport.isPlaneThere(plane))
