//File that includes all of the tests for the Airport Challenge

//Import the Airport class
import Airport from "/Users/oonaghparker/Desktop/debug/airport-challenge/src/airport.js"
import Weather from "/Users/oonaghparker/Desktop/debug/airport-challenge/src/weather.js"

//--------------------------------------

describe("Airport Challenge Testing Suite", () => {

    // Test 1 - Land the plane
    it("Land the plane", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.landedPlanes.length).toBe(1);
    });

    // Test 2 - Change the airport capacity
    it("Change the airport capacity", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };
        let plane2 = { id: `Plane 2` };
        let plane3 = { id: `Plane 3` };

        // Act
        airport.landPlane(plane);
        airport.landPlane(plane2);
        airport.landPlane(plane3);
        airport.airportCapacity(3)

        // Assert
        expect(airport.capacity).toBe(3);
    });

    // Test 3 - Is the airport full
    it("Is the airport full", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };
        let plane2 = { id: `Plane 2` };
        let plane3 = { id: `Plane 3` };

        // Act
        airport.landPlane(plane);
        airport.landPlane(plane2);
        airport.landPlane(plane3);
        airport.airportCapacity(3)

        // Assert
        expect(airport.isAirportFull()).toBe(true);
    });

    // Test 4 - Let plane take off and confirm it is no longer in the airport  
    it("Let plane take off and confirm it is no longer in the airport", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);
        airport.planeTakeoff(plane);

        // Assert
        expect(airport.landedPlanes.length).toBe(0);
    });

    // Test 5 - Is plane already in the airport?
    it("Is plane already in the airport", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.isPlaneAlreadyInAirport(plane.id)).toBe(true);
    });

    // Test 6 - Plane has not landed in the airport
    it("Plane has not landed in the airport", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };

        // Act

        // Assert
        expect(airport.isPlaneAlreadyInAirport(plane.id)).toBe(false);
    });

    // Test 7 - Safe for plane to takeoff?
    it("Safe for takeoff?", () => {
        //Arrange
        let airport = new Airport();
        let plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.weatherCheck()).toBe(true);
    });

    // Test 8 - Safe for plane to land?
    it("Safe for land", () => {
        //Arrange
        let airport = new Airport();

        // Act

        // Assert
        expect(airport.weatherCheck()).toBe(true);
    });
});