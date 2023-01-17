class Plane {
    id;

    constructor(id) {
        this.id = id;
    }


}

module.exports = Plane;


// Test to check that planes cannot take off when they are not at the airport
// const planeStatus = 'notAtAirport';

// if (planeStatus === 'notAtAirport') {
//   assert.strictEqual(takeOff(), false, 'Cannot take off when plane is not at the airport')
// }
