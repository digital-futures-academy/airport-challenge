let assertEquals = require('../test-framework.js');
let Plane = require('../src/plane.js');

//Test 1
console.log('Creating and accessing a plane named Emirates');
//1. Set Up
let emirates = new Plane('Emirates');

//2. Execute
result = emirates._name

//3. Verify
console.log(assertEquals(result, 'Emirates'));

//------------------------------------------------------------------------------
