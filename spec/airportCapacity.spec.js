import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('Airport Tests', () => {

    let plane, airport, actual, expected;

    // Set Up before every test
    beforeEach(() => {
        plane = new Plane();
        airport = new Airport();

    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
        actual = undefined;
        expected = undefined;
    });



    //=====================TEST1====================\\

    it('airport capacity has a capacity', () => {

        // Arrange
        expected = 0;

        // Act
        actual = airport.airportCapacity;

        // Assert
        expect(actual).toBeGreaterThan(expected);

    });

    //=====================TEST2====================\\

    it('changeAirportSize increases airportCapacity by 50', () => {

        // Arrange
        expected = 50;

        // Act
        airport.changeAirportSize(50)
        actual = airport.airportCapacity;

        // Assert
        expect(actual).toBe(expected);

    });

    //=====================TEST3====================\\

    it('changeAirportSize increases airportCapacity to 5', () => {

        // Arrange
        expected = 5;

        // Act
        airport.changeAirportSize(5)
        actual = airport.airportCapacity;

        // Assert
        expect(actual).toBe(expected);

    });

    //=====================TEST4====================\\

    it('TEST 4: changeAirportSize can not change airportCapacity to less than 0', () => {

        // Arrange
        expected = 100;

        // Act
        airport.changeAirportSize(-5)
        actual = airport.airportCapacity;

        // Assert
        expect(actual).toBe(expected);
    });

    //=====================TEST5====================\\

    it('TEST 5: changeAirportSize can not be undefined', () => {

        // Arrange
        expected = 100;

        // Act
        airport.changeAirportSize(undefined)
        actual = airport.airportCapacity;

        // Assert
        expect(actual).toBe(expected);
    });
});