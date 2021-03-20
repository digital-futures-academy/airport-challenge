const test = require('../test_framwork');
const Plane = require('../src/plane');

console.log('Checking plane functions');

test.it('Checking it is setting plane name correct', function(){
    let myplane = new Plane('Boeing 247');
    let result = myplane._plane;
    test.assertEquals(result, 'Boeing 247');
});

test.it('Checking plane is in the correct flying status when intialised', function(){
    let myplane = new Plane('Boeing 247');
    let result = myplane._flying;
    test.assertEquals(result, true);
});


