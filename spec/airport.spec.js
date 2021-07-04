const assertEquals = require("../src/assertequalss");

const Airport = require("../src/airport");

let airport, result, expectedResult;

//----------------------Test 1
console.log('Test to see if correct plane is called to land when airport is instructed');
//setup
airport = new Airport (3);

//execute
result = airport.add('plane1');

//verify
console.log('call plane1');
console.log(assertEquals(result.length,1));
console.log(assertEquals(result.includes('plane1'), true));
console.log(result + ' '  + 'Land');


//-----------------------Test 2 
console.log('Test to see if airport capacity returns full when it is at max');

//setup 
airport= new Airport ();
airport.add('plane1');
airport.add('plane2');
airport.add('plane3');
airport.add('plane4');
airport.add('plane5');
airport.add('plane6');
airport.add('plane7');
airport.add('plane8');
expectedResult = 'capacity full';



//execute 
result = airport.add('plane7');
// 1) dont add it to airport list
// 2) return somethign we can check with


//verify 

console.log(assertEquals(result, expectedResult));
console.log(assertEquals(airport.planes.includes('plane 7'), false));

console.log(result);
//verify

console.log(assertEquals(result,expectedResult));

//--------------------------------Test 4
console.log('Test to see if default airport capacity can be overridden');

// setup
airport = new Airport (5);
expectedResult = 5;

//execute
result = airport.capacity;
console.log(result);

//verify
console.log(assertEquals(result, expectedResult));

//-----------------------------------Test 5
console.log('Test to see if I can call a plane to land that has already landed');

//setup
airport = new Airport (3);
airport.add('plane1');

expectedResult = 'plane already landed' ;

//execute
result = airport.add('plane1');

//verify
console.log(assertEquals(result, expectedResult));
console.log(result);

//----------------------------------------Test 6
console.log('Test to see if airport can confirm when plane has taken off');


//setup remove plane
airport = new Airport (3);
airport.add('plane5');
airport.add('plane2');

//execute remove item
result = airport.remove('plane5');

console.log(airport.capacity);

//verify remove item

console.log(assertEquals(result.length, 1));
console.log(assertEquals(result.includes('plane5'), false));
console.log('here are the remaining planes:');
console.log(airport);

//----------------------------------------Test 6
console.log('Test to check that airport cant tell plane to tak off if its already left');


//setup remove plane
airport = new Airport (3);
expectedResult = 0;

//execute remove item
result = airport.remove('plane5');

//verify remove item

console.log(assertEquals(result, expectedResult));

console.log(result);

//-----------------------------------------------Test 7

console.log('Test to see if planes can be called to takeoff');

//setup

airport = new Airport (3);
airport.add('plane2');
airport.add('bigplane');
//execute
result = airport.remove('plane2');

//verify
console.log(result);

//-------------------------------------------------------Test 8 
console.log('if weather is rough, do not allow planes to take off or land')
//setup
airport = new Airport(3);
airport.add("plane1");
//execute

