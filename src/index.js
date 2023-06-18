const Airport = require("../src/airport.js");

const Luton = new Airport();
Luton.adjustAirportCapacity(3);

Luton.landPlane('RyanAir')
Luton.landPlane('ThaiAirways')

Luton.takeoffPlane('RyanAir')

Luton.landPlane('EasyJet')
Luton.landPlane('Emirates')
Luton.landPlane('TurkishAirline')  //should be full capacity

Luton.takeoffPlane('Emirates')

console.log('Is airport full? ' + Luton.isAirportFull())

Luton.landPlane('TurkishAirline') // full again 

console.log('Is airport full? ' + Luton.isAirportFull())