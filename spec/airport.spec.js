const Test = require('./test.spec.js'); 
const Airport = require('../src/airport.js');

var heathrow = new Airport(2);
var test = new Test(); 

test.it('Land Test', () => {
    return test.assertEquals(heathrow.land('Plane1')[0],'Plane1');
});  

test.it('Plane Exists', () => {
    return test.assertEquals(heathrow.land('Plane1'), 'Plane present in airport'); 
}); 

test.it('Land Test 2', () => {
    return test.assertEquals(heathrow.land('Plane2')[1],'Plane2');
});  

test.it('Full Test', () => {
    return test.assertEquals(heathrow.land('Plane3'), 'Airport Full'); 
});

test.it('Take off', () => {
    return test.assertEquals(heathrow.takeOff('Plane1')[0], 'Plane2');  
});

test.it('Plane not in Airport', () => {
    return test.assertEquals(heathrow.takeOff('Plane50', 'Plane not Present in airport')); 
}); 

heathrow.capacity = 3; 
test.it('Adding Capacity' , () =>{
    return test.assertEquals(heathrow.land('Plane3')[2], 'Plane3'); 
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
