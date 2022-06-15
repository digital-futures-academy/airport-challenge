const Airport = require('../classes/AirportClass');

class Main {
    static main() {
        let airport = new Airport;
        console.log(airport._capacity);
        console.log(airport.landAPlane('PLANE1').includes('PLANE1'));

        let airport2 = new Airport(2);
        console.log(airport2._capacity);
        console.log(airport2.listOfLandedPlanes.length);
        airport2.listOfLandedPlanes = ['PLANE1', 'PLANE2'];
        console.log(airport2.landAPlane('PLANE3'));
    }
}

Main.main();