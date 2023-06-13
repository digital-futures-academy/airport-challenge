import Airport from "../src/Airport.js";

class MockPlane {
    getAirport() {
        return undefined;
    }

    setAirport() {
        this.airport = new Airport(0);
    }
}

describe("Airport User Story 1", function () {

    let plane;
    let airport;

    beforeEach(() => {
        plane = new MockPlane();
        airport = new Airport(5);
    });

    afterEach(() => {
        plane = undefined;
        airport = undefined;
    });


    it("Should add one to the airport array", function () {
        //Arrange
        const spyAirport = spyOn(airport, `landPlane`);

        //Act
        airport.landPlane(plane);

        //Assert
        expect(spyAirport).toHaveBeenCalledOnceWith(plane);

    });

    it("Should add a ~planelike~ to the array", function () {

        //Act
        airport.landPlane(plane);

        //Assert
        expect(airport.getPlanesAtAirport()).toContain(plane);

    })

});