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
let result1a = jfk.landPlane(emirates);
let result1b = emirates._landed;

//3. Verify
console.log(assertEquals(result1a.length, 1));
console.log(assertEquals(result1b, true))

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
frankfurt.capacityOverride(3);

let ryanair = new Plane('Ryanair')
let etihad = new Plane('Etihad')
let ba = new Plane('British Airways')
let qantas = new Plane('Qantas')
frankfurt.landPlane(ryanair);
frankfurt.landPlane(etihad);
frankfurt.landPlane(ba);


//2.Execute
result3 = frankfurt.landPlane(qantas);

//3.Verify
console.log(assertEquals(result3, 'Abort landing! The airport is full!'))

//------------------------------------------------------------------------------

//Fourth test
console.log('Does take off decrease planes in airport? Can we confirm plane has left the airport?')
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
let result4c = airFrance._landed

//3. Verify
console.log(assertEquals(result4a.length, 2));
console.log(assertEquals(result4b, false));
console.log(assertEquals(result4c, false))

//------------------------------------------------------------------------------

//Fifth test
console.log('Does trying to land an already landed plane return an error? Same for take off?');
//1. Set up
let dubai = new Airport();
dubai.weather = 50;

let turkishAirlines = new Plane('Turkish Airlines')
let lufthansa = new Plane('Lufthansa')
let americanAirlines = new Plane('American Airlines')
dubai.landPlane(turkishAirlines);
dubai.landPlane(lufthansa);
dubai.landPlane(americanAirlines);
dubai.takeOff(americanAirlines);

//2. Execute
const result5a = dubai.landPlane(turkishAirlines);
const result5b = dubai.takeOff(americanAirlines);

//3. Verify
console.log(assertEquals(result5a, 'This plane has already landed!'));
console.log(assertEquals(result5b, 'This plane has already taken off!'));

//------------------------------------------------------------------------------
//Sixth Test
console.log('Does trying to take off a plane during stormy weather return an error?')
//1. Set up
let newark = new Airport();
let airCanada = new Plane('Air Canada');
let southwestAirlines = new Plane('Southwest Airlines');
newark.landPlane(airCanada);
newark.landPlane(southwestAirlines);
newark.weather = 3;


//2. Execute
let result6 = newark.takeOff(airCanada);

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

//Edge case 2
console.log('Does trying to takeff a plane from the wrong airport return an error?')

//1. Set up
let birmingham = new Airport();
birmingham.weather = 50;
let tui = new Plane('tui');
birmingham.landPlane(tui);
let glasgow = new Airport();
glasgow.weather = 50;
let finnair = new Plane('Finnair');
glasgow.landPlane(finnair);

//2. Execute
resultE2 = glasgow.takeOff(tui);

//3. Verify
console.log(assertEquals(resultE2, 'This plane is not in this airport!'))
