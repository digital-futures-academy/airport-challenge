const Airport = require('../classes/AirportClass');

class Main {
    static main() {
        let airport = new Airport;

        console.log(airport.landAPlane('PLANE1').includes('PLANE1'));
    }
}

Main.main();