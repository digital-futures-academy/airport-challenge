'use strict';

var assertEquals = require('../test-framework');

var Plane = require('../src/plane'); //defining the varriables need


var plane, result; //Testing the Get Plane function

console.log(' ');
console.log('Does the get flying plane function print the plane flying'); //Setup

plane = new Plane('Plane 2'); //EXECUTE ADD FUNCTION

result = plane.getPlaneFlying(); //VERIFY ADD FUNCTION

console.log(assertEquals(result.includes('Plane 2'), true));