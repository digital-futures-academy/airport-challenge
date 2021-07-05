const Test = require('./test.spec.js'); 
const Airport = require('../src/airport.js');

var heathrow = new Airport(2);
var test = new Test(); 

test.it('Land Test', () => {
    return test.assertEquals(heathrow.land('Plane1',1)[0],'Plane1');
});  

test.it('Plane Exists', () => {
    return test.assertEquals(heathrow.land('Plane1',1), 'Plane present in airport'); 
}); 

test.it('Land Test 2', () => {
    return test.assertEquals(heathrow.land('Plane2',1)[1],'Plane2');
});  

test.it('Full Test', () => {
    return test.assertEquals(heathrow.land('Plane3',1), 'Airport Full'); 
});

test.it('Take off', () => {
    return test.assertEquals(heathrow.takeOff('Plane1',1)[0], 'Plane2');  
});

test.it('Plane not in Airport', () => {
    return test.assertEquals(heathrow.takeOff('Plane50',1), 'Plane not present in airport'); 
}); 

heathrow.setCapacity(3); 
heathrow.land('Plane3',1);

test.it('Adding Capacity' , () =>{
    return test.assertEquals(heathrow.land('Plane4',1)[2], 'Plane4'); 
}); 


test.it('Reduce Capacity Fail', () => {
    return test.assertEquals(heathrow.setCapacity(2), 'More planes than capacity'); 
});

test.it('0 Capacity' , () => {
    return test.assertEquals(heathrow.setCapacity(0), 'Cannot have less than one plane'); 
}); 

test.it('Negative Capacity', () => {
    return test.assertEquals(heathrow.setCapacity(-1), 'Cannot have less than one plane'); 
});

test.it('Stormy Landing', () => {
    return test.assertEquals(heathrow.takeOff('Plane2', 2), 'Landing denied, stormy'); 
});

test.it('Stormy Takeoff', () => {
    return test.assertEquals(heathrow.takeOff('Plane2', 2), 'Landing denied, stormy'); 
});