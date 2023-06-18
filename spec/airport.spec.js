import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

//const Airport = require('../src/airport.js');


describe(` Airport Testing -`, () => {

    let airport;
    let plane;


    //Arrange before every Test Case
    beforeEach(() => {
        airport = new Airport;
        plane = new Plane;
    });


    it(`Test 1 : Instructing plane to land when airport is not full and weather is sunny`, () => {
        // const airport = new Airport();


        //Act
        airport.landPlane(plane);
        const actual = airport.airportPlanes

        //Assert
        expect(actual).toContain(plane);
    });
    it(`Test 2 : Prevent plane from landing if the airport is full`, () => {
        //Act
        airport.capacity = 1;
        airport.landPlane(plane);

        const anotherPlane = new Plane();
        airport.landPlane(anotherPlane);
        const actual = airport.airportPlanes.length;

        //Assert
        expect(actual).toBe(1);
    });

    it('Test 3 : Prevent plane from landing when weather is stormy', () => {

        //Act
        airport.setWeather('stormy');
        airport.landPlane(plane);


        //Assert
        const actual = airport.airportPlanes.length;
        expect(actual).not.toContain(plane);
    });

    it(`Test 4: Take of plane which are at the airport `, () => {

        //Act
        airport.landPlane(plane);
        airport.takeOffPlane(plane)

        //Assert
        expect(airport.airportPlanes).not.toContain(plane);
    });

    it(`Test 5 : Prevent the plane from take off when plan isn't at the airport`, () => {
        //Act
        airport.airportPlanes = [];
        airport.takeOffPlane(plane)

        //Act
        expect(airport.airportPlanes).not.toContain(plane);
    });

    it(`Test 6 : Prevent the plane from take off when weather is stormy`, () => {

        //Act
        airport.landPlane(plane);
        airport.setWeather('stormy');
        airport.takeOffPlane(plane);

        //Assert
        expect(airport.airportPlanes).toContain(plane);
    });

    it(`Test 7 : Prevent landing when plane has already landed`, () => {
        //Act
        airport.landPlane(plane);

        //Assert
        expect(() => airport.landPlane(plane));
        expect(airport.airportPlanes.length).toBe(1);
    });

    it(`Test 8 : Should prevent take off when plane is already flying`, () => {

        //Assert
        expect(() => airport.takeOff(plane));
        expect(airport.planes).not.toContain(plane);
    });

    it(`Test 9: Count the number of planes at the airport`, () => {
        //Act
        const plane1 = new Plane();
        const plane2 = new Plane();

        airport.landPlane(plane1);
        airport.landPlane(plane2);

        const actual = airport.airportPlanes.length;

        //Assert
        expect(actual).toBe(2);
    });
});
