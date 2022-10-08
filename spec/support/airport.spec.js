//File that includes all of the tests for the Airport Challenge

//--------------------------------------

//Import the Airport class and define all objects
import Airport from "/Users/oonaghparker/Desktop/debug/airport-challenge/src/airport.js"

let airport;
let plane;
let plane2;
let plane3;
let result;

//--------------------------------------

describe("Airport Challenge Testing Suite", () => {

    // Test 1 - Land the plane
    it("Land the plane", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.landedPlanes.length).toBe(1);
    });

    // Test 2 - Change the airport capacity
    it("Change the airport capacity", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };
        plane2 = { id: `Plane 2` };
        plane3 = { id: `Plane 3` };

        // Act
        airport.landPlane(plane);
        airport.landPlane(plane2);
        airport.landPlane(plane3);
        airport.airportCapacity(3);

        // Assert
        expect(airport.capacity).toBe(3);
    });

    // Test 3 - Is the airport full
    it("Is the airport full", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };
        plane2 = { id: `Plane 2` };
        plane3 = { id: `Plane 3` };

        // Act
        airport.landPlane(plane);
        airport.landPlane(plane2);
        airport.landPlane(plane3);
        airport.airportCapacity(3);

        // Assert
        expect(airport.isAirportFull()).toBe(true);
    });

    // Test 4 - Let plane take off and confirm it is no longer in the airport  
    it("Let plane take off and confirm it is no longer in the airport", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Let the plane takeoff from the airport
        airport.planeTakeoff(plane);

        // Assert
        // Check the plane is no longer in the airport (landed planes array)
        expect(airport.landedPlanes.length).toBe(0);
    });

    // Test 5 - Is plane already in the airport?
    it("Is plane already in the airport?", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.isPlaneAlreadyInAirport(plane.id)).toBe(true);
    });

    // Test 6 - Plane has not landed in the airport
    it("Plane has not landed in the airport", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };

        // Act
        result = airport.isPlaneAlreadyInAirport(plane.id);

        // Assert
        // Use the already defined isPlaneAlreadyInAirport() but the result is false
        // as the plane has not landed in the airport and isnt in the landedPlanes array
        expect(result).toBe(false);
    });

    // Test 7 - Safe for plane to takeoff?
    it("Safe for takeoff?", () => {
        //Arrange
        airport = new Airport();

        // Act
        result = airport.weatherCheck();

        // Assert
        expect(result).toBeDefined();
    });

    // Test 8 - Safe for plane to land?
    it("Safe for land", () => {
        //Arrange
        airport = new Airport();

        // Act
        result = airport.weatherCheck();

        // Assert
        expect(result).toBeDefined();
    });

    // Test 9 - Landed planes are in the airport
    it("Landed planes are in the airport", () => {
        //Arrange
        airport = new Airport();
        plane = { id: `Plane 1` };
        plane2 = { id: `Plane 2` };

        // Act
        airport.landPlane(plane);
        airport.landPlane(plane2);
        airport.airportCapacity(2);

        // Assert
        // Planes that have landed are in the airport in the landedPlanes array
        expect(airport.landedPlanes.length).toBe(2);
    });
});