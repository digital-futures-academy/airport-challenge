const Airport = require('../src/airport.js')
const test = require('../test-framework')

//User story 1 
test.it('check that airport can land plane', () => {
    /* Will contain test code*/
    let airport, plane;
    // Test 1 
    airport = new Airport();
    plane = 'jfk';


    // To act 

    airport.land(plane);

    test.assertEquals(airport.planes.length, 1);


});


//User Story 2 
test.it('Can the capacity be overridden', () => {
    airport = new Airport(2);

    airport.capacity;

    test.assertEquals(airport.capacity, 2);
});

//User story 3 
test.it('preventing landing if the airport is full', () => {
    airport = new Airport(1);
    plane = 'jfk';
    plane2 = 'Luton';
    plane3 = ' Heathrow';

    airport.land(plane);
    airport.land(plane2);
    airport.land(plane3);

    test.assertEquals(airport.planes.length, 1);
});

//User story 4 
test.it('airport it has taken off it is no longer in Airport', () => {
    airport = new Airport();
    plane = 'huston';

    airport.land(plane);
    result = airport.takeOff(plane);

    test.assertEquals(airport.planes.length, 0);
});

//user story 5 
test.it('the plane is not there ', () => {

    airport = new Airport();
    plane = 'huston';

    result = airport.takeOff(plane);

    test.assertEquals(airport.takeOff(plane));
});


