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

    it('should add an airplane to the airport', () => {

        // Arrange
        expected = 1

        // Act
        airport.addPlane(123)
        actual = airport.airportPlanes.length;


        // Assert
        expect(actual).toBe(expected);

    });



    //==========================TEST2==========================\\

    it('addPlane adds a plane with the id: "Plane - 1"', () => {

        // Arrange
        expected = "Plane - 1"


        // Act
        airport.addPlane('Plane - 1')
        actual = airport.airportPlanes[0]


        // Assert
        expect(actual).toBe(expected);

    });


    //==========================TEST3==========================\\

    it('TEST 3: addPlane does not add a plane with an undefined id', () => {

        // Arrange
        expected = 0

        // Act
        airport.addPlane()
        actual = airport.airportPlanes


        // Assert
        expect(actual).toHaveSize(expected);

    });

    //==================================TEST4=====================================\\    

    it('TEST 4: multiple planes can be added to airportPlanes', () => {

        // Arrange
        expected = 5

        // Act
        airport.addPlane(111);
        airport.addPlane(222);
        airport.addPlane(333);
        airport.addPlane(444);
        airport.addPlane(555);
        actual = airport.airportPlanes


        // Assert
        expect(actual).toHaveSize(expected);

    });
});

