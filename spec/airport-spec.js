import Airport from "../src/airport.js";

describe("Airport Tests", () => {

  let airport, plane, plane2, plane3;
  class MockPlane {
    aircraftId = "";
    aircraftStatus = "";
  }
  
  describe("Airport Landing and taking off Tests", () => {
    beforeEach(() => {
      plane = new MockPlane();
      airport = new Airport();
      plane.aircraftId = "G-XLEE";
      plane.aircraftStatus = "departed";
      plane2 = new MockPlane();
      plane2.aircraftId = "G-KELS";
      plane2.aircraftStatus = "departed";
      plane3 = new MockPlane();
      plane3.aircraftId = "G-BETI";
      plane3.aircraftStatus = "departed";
    });

    afterEach(() => {
      plane = undefined;
      airport = undefined;
      plane = undefined;
      plane2 = undefined;
      plane3 = undefined;
    });

    it("returns [] for empty airport", () => {
      //assert
      expect(airport.landedPlanes).toEqual([]);
    });

    it("lands one plane in the airport using landPlane and expect array (landedPlanes) has increased in length by 1", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.landedPlanes.length).toEqual(1);
    });

    it("lands a plane with id `G-XLEE` in the airport", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.landedPlanes[0].aircraftId).toBe("G-XLEE");
    });

    it(" does not land plane without id in the airport", () => {
      //arrange
      plane.aircraftId = "";
      //act
      airport.landPlane(plane);
      airport.landPlane(plane2);
      //assert
      expect(airport.landedPlanes.length).toBe(1);
    });

    it("does not land plane without status in the airport", () => {
      //arrange
      plane.aircraftStatus = "";
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.landedPlanes.length).toBe(0);
    });

    it("should return an error when a plane with wrong status type attempts to land in the airport", () => {
      //arrange
      plane.aircraftStatus = true;
      //act
      //assert
      expect(() => { airport.errorIfWrongStatusType(plane) }).toThrowError('Unidentified plane status. Plane status must be a string.');
    });

    it("should return an error when a plane of wrong id type attempts to land in the airport", () => {
      //arrange
      plane.aircraftId = 23;
      //act
      //assert
      expect(() => { airport.errorIfWrongIdType(plane) }).toThrowError('Unidentified plane id. Plane id must be a string.');
    });

    it("returns error when a plane of wrong id type attempts to land in the airport", () => {
      //arrange
      plane.aircraftId = 23;
      //act
      //assert
      expect(() => { airport.landPlane(plane) }).toThrowError('Unidentified plane id. Plane id must be a string.');
    });

    it("returns error when a plane of wrong status type attempts to land in the airport", () => {
      //arrange
      plane.aircraftStatus = undefined;
      //act
      //assert
      expect(() => { airport.landPlane(plane) }).toThrowError('Unidentified plane status. Plane status must be a string.');
    });

    it("lands 3 planes with in the airport", () => {
      //arrange
      //act
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);
      //assert
      expect(airport.landedPlanes.length).toBe(3);
    });

    it("plane with null is not landing on the airport", () => {
      //arrange
      plane.aircraftId = null;
      //act
      //assert
      expect(() => { airport.landPlane(plane) }).toThrowError('Unidentified plane id. Plane id must be a string.');
    });

    it("changes plane status from `departed` to `landed` once it lands in the airport", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.landedPlanes[0].aircraftStatus).toBe("landed");
    });

    it("check that the initial airport capacity is 10", () => {
      //arrange
      //act
      //assert
      expect(airport.maxAirportCapacity).toEqual(10);
    });

    it("overrides maxAirportCapacity from 10 to 1500", () => {
      //act
      airport.overrideAirportCapacityBy(1490);
      //assert
      expect(airport.maxAirportCapacity).toEqual(1500);
    });

    it("overrides maxAirportCapacity from 1500 to 1000", () => {
      //act
      airport.overrideAirportCapacityBy(1490);
      airport.overrideAirportCapacityBy(-500);

      //assert
      expect(airport.maxAirportCapacity).toEqual(1000);
    });

    it("isAirportFull returns a boolean", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.isAirportFull()).toMatch(/true|false/);
    });

    it("informs airport is NOT full when 1 plane lands in airport with max capacity of 10", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(airport.isAirportFull()).toEqual(false);
    });

    it("is full when airport is at max capacity", () => {
      //arrange
      //act
      airport.overrideAirportCapacityBy(-7);
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);
      //assert
      expect(airport.isAirportFull()).toEqual(true);
    });

    it("does not land plane if airport is full", () => {
      //arrange
      //act
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.overrideAirportCapacityBy(-8);
      airport.landPlane(plane3);
      //assert
      expect(airport.landedPlanes).toEqual([plane, plane2]);
    });

    it("Plane takes off using planeTakeOff and expect array (landedPlanes) has decreased in length by 1", () => {
      //arrange
      //act
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.planeTakeOff("G-XLEE");
      //assert
      expect(airport.landedPlanes.length).toBe(1);
    });

    it("confirms plane with id of G-XLEE took off with message: `G-XLEE took off from airport` ", () => {
      //arrange
      //act
      airport.landPlane(plane);
      const message = airport.planeTakeOff("G-XLEE");
      //assert
      expect(message).toBe("G-XLEE took off from airport");
    });

    it("checks that plane with id of G-XLEE is the plane that took off from the `airport", () => {
      //arrange
      airport.landPlane(plane);
      airport.landPlane(plane2);
      //act
      const airportPlanesBeforePlane2TakesOff = airport.landedPlanes;
      airport.planeTakeOff("G-XLEE");
      const airportPlanesAfterPlane2TookOff = airport.landedPlanes;
      //assert
      expect(airportPlanesAfterPlane2TookOff).not.toContain(plane);
    });

    it("does not allow plane to land if plane is already at the airport", () => {
      //arrange
      //act
      airport.landPlane(plane);
      //assert
      expect(() => { airport.errorPlaneAlreadyAtAirport(plane) }).toThrowError("Plane with id G-XLEE is already at the airport.");
    });

    it("does not allow plane to take off if plane is not at the airport", () => {
      //arrange
      //act
      airport.landPlane(plane);
      airport.landPlane(plane2);
      //assert
      expect(() => airport.planeTakeOff("G-BETI")).toThrowError('Plane to depart must be at the airport');
    });
  });
  
  describe('Checks weather tests', () => {
    beforeEach(() => {
      plane = new MockPlane();
      airport = new Airport();
      plane.aircraftId = "G-XLEE";
      plane.aircraftStatus = "departed";
    });

    afterEach(() => {
      plane = undefined;
      airport = undefined;
    });

    it('does not allow plane to land when the weather is stormy', () => {
      //arrange
      class MockWeather {
        getCurrentWeather = () => 'stormy';
      }
      const weather = new MockWeather();
      const currentWeather = weather.getCurrentWeather();
      //act
      //assert
      expect(() => { airport.landPlane(plane, currentWeather) }).toThrowError('Plane cannot land when weather is stormy.');
    })

    it('plane lands when the weather is clear', () => {
      //arrange
      class MockWeather {
        getCurrentWeather = () => 'clear';
      }
      const weather = new MockWeather();
      const currentWeather = weather.getCurrentWeather();
      //act
      airport.landPlane(plane, currentWeather);
      //assert
      expect(airport.landedPlanes.length).toBe(1);
    })
  })
});
