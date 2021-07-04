let Airport = require('../src/airport.js')
let Plane = require('../src/plane.js')
let assertEquals = require('../test-framework.js')

//------------------------------------------------------------------------------

//First test
console.log('Does landing a plane add 1 plane to the airport')
//1. Set up
let jfk = new Airport();
jfk.weather = 50;
let emirates = new Plane('Emirates');

//2. Execute
let result1 = jfk.landPlane(emirates);

//3. Verify
console.log(assertEquals(result1.length, 1));

//------------------------------------------------------------------------------

//Second Test
console.log('Does the airport have a default capacity of 100?');
//1. Set up
let heathrow = new Airport();
heathrow.weather = 50;


//2. Execute
let result2a = heathrow.capacity

//3. Verify
console.log(assertEquals(result2a, 100));


console.log('Can the capacity be overridden to 200?')
//1. Set up
let gatwick = new Airport();
gatwick.weather = 50;


//2. Execute
let result2b = gatwick.capacityOverride(200);

//3. Verify
console.log(assertEquals(result2b, 200));

//------------------------------------------------------------------------------

//Third test
console.log('Does trying to add too many planes return an error');
//1. Set up
let frankfurt = new Airport();
frankfurt.weather = 50;

let ryanair = new Plane('Ryanair')
let etihad = new Plane('Etihad')
let ba = new Plane('British Airways')
let qantas = new Plane('Qantas')
frankfurt.landPlane(ryanair);
frankfurt.landPlane(etihad);
frankfurt.landPlane(ba);
frankfurt.capacityOverride(3);

//2.Execute
result3 = frankfurt.landPlane(qantas);

//3.Verify
console.log(assertEquals(result3, 'Abort landing! The airport is full!'))

//------------------------------------------------------------------------------

//Fourth test
console.log('Does take off decrease planes in airport? Can we confirm plane has left?')
//1. Set up
let atlanta = new Airport();
atlanta.weather = 50;

let jet2 = new Plane('jet2')
let easyJet = new Plane('easyJet')
let airFrance = new Plane('Air France')

atlanta.landPlane(jet2);
atlanta.landPlane(easyJet);
atlanta.landPlane(airFrance);

//2. Execute
let result4a = atlanta.takeOff(airFrance);
let result4b = atlanta.inAirport(airFrance);

//3. Verify
console.log(assertEquals(result4a.length, 2));
console.log(assertEquals(result4b, false));

//------------------------------------------------------------------------------

//Fifth test
console.log('Does trying to land an already landed plane return an error? Same for take off?');
//1. Set up
let dubai = new Airport();
dubai.weather = 50;

let turkishAirlines = new Plane('Turkish Airlines')
let lufthansa = new Plane('Lufthansa')
let aa = new Plane('American Airlines')
dubai.landPlane(turkishAirlines);
dubai.landPlane(lufthansa);
dubai.landPlane(aa);
dubai.takeOff(aa);

//2. Execute
const result5a = dubai.landPlane(turkishAirlines);
const result5b = dubai.takeOff(aa);

//3. Verify
console.log(assertEquals(result5a, 'This plane has already landed!'));
console.log(assertEquals(result5b, 'This plane has already taken off!'));

//------------------------------------------------------------------------------
//Sixth Test
console.log('Does trying to take off a plane during stormy weather return an error?')
//1. Set up
let newark = new Airport();
newark.weather = 3
let airCanada = new Plane('Air Canada');
let southwestAirlines = new Plane('Southwest Airlines');
newark.landPlane(airCanada);
newark.landPlane(southwestAirlines);

//2. Execute
const result6 = newark.takeOff(airCanada);

//3. Verify
console.log(assertEquals(result6, "It's too stormy! No planes can take off!"));

//------------------------------------------------------------------------------
//Seventh Test
console.log('Does trying to land a plane during stormy weather return an error?')
//1. Set up
let lax = new Airport();
lax.weather = 3
let airChina = new Plane('Air China');
let cathayPacific = new Plane('Cathay Pacific');
let singaporeAirlines = new Plane('Singapore Airlines')
lax.landPlane(airChina);
lax.landPlane(cathayPacific);

//2. Execute
const result7 = lax.landPlane(singaporeAirlines);

//3. Verify
console.log(assertEquals(result7, "It's too stormy! No planes can land!"));

//------------------------------------------------------------------------------

//Edge cases
console.log('Does trying to land a plane that has landed elsewhere return an error?')

//1.Set up
let stansted = new Airport();
stansted.weather = 50;
let flybe = new Plane('Flybe');
stansted.landPlane(flybe);
let manchester = new Airport();
manchester.weather = 50;

//2. Execute
let resultE1 = manchester.landPlane(flybe);

//3. Verify
console.log(assertEquals(resultE1, 'This plane has already landed!'));

//------------------------------------------------------------------------------
