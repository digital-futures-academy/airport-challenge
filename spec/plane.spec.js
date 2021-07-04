let assertEquals = require('../test-framework.js');
let Plane = require('../src/plane.js');

//Test 1
console.log('Creating and accessing a plane named Emirates');
//1. Set Up
let emirates = new Plane('Emirates');

//2. Execute
let result1 = emirates._name

//3. Verify
console.log(assertEquals(result1, 'Emirates'));

//------------------------------------------------------------------------------

//Test 2
console.log('Landing a plane changes landed status to true');
//1. Set Up
let delta = new Plane('Delta');

//2. Execute
delta.land();

//3. Verify
console.log(assertEquals(delta._landed, true))

//------------------------------------------------------------------------------

//Test 3
console.log('Take off changes landed status to false');
//1. Set up
let united = new Plane('United');
united.land();

//2. Execute
united.takeOff();

//3. Verify
console.log(assertEquals(united._landed, false))
