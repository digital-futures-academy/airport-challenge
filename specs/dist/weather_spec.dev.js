'use strict';

var assertEquals = require('../test-framework');

var Weather = require('../src/weather'); //defining the varriables need


var weather, result, check; //Testing the Get Plane function

console.log(' ');
console.log('check if weather is not stormy'); //Setup

weather = new Weather(); //EXECUTE ADD FUNCTION

result = weather.randomNumber;
check = weather.checkIfStormy();
console.log(result); //VERIFY ADD FUNCTION

console.log(assertEquals(result <= 0.2, true));
console.log(assertEquals(check, true)); //Testing the Get Plane function

console.log(' ');
console.log('check if weather is stormy'); //Setup

weather = new Weather(); //EXECUTE ADD FUNCTION

result = weather.randomNumber;
check = weather.checkIfStormy();
console.log(result); //VERIFY ADD FUNCTION

console.log(assertEquals(result >= 0.2, true));
console.log(assertEquals(check, false));