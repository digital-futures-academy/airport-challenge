import Airport from "../src/airport.js";
import Plane from "../src/Plane.js";
import Weather from "../src/Weather.js";

describe('Airport Tests', () => {
    let airport;

    beforeEach(() => {
        airport = new Airport();
    })

    it('should add plane to the planesList when landPlane is called', () => {
        // Arrange
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);

        // Assert
        expect(airport.getPlanesList().length).toBe(1);
    })

    it('should assign a default capacity to a new instance of Airport', () => {
        expect(airport.getCapacity()).toBe(5);
    })

    it('should be able to override the default airport capacity', () => {
        // Act
        airport.setCapacity(10);

        expect(airport.getCapacity()).toBe(10);
    })

    it('should prevent assigning a negative capacity', () => {
        expect(() => airport.setCapacity(-1)).toThrowError('Capacity cannot be set below 0.')
    })

    it('should prevent landing when the airport reaches maximum capacity', () => {
        // Arrange
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);
        let plane3 = new Plane(`a3`);

        // Act
        airport.setCapacity(2);
        airport.landPlane(plane1);
        airport.landPlane(plane2);

        expect(() => airport.landPlane(plane3)).toThrowError('The airport is full. Cannot land the plane.');
    })

    it('should not remove previously landed planes when modifying the capacity to a lower value', () => {
        // Arrange
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);

        // Act
        airport.landPlane(plane1);
        airport.landPlane(plane2);
        airport.setCapacity(1);

        expect(airport.getCapacity()).toBe(1);
        expect(airport.getPlanesList()).toContain(plane1);
        expect(airport.getPlanesList()).toContain(plane2);
    })

    it('should remove a plane from the planes list when it takes off', () => {
        // Arrange
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);
        airport.landPlane(plane1);
        airport.landPlane(plane2);

        // Act
        airport.takeOff(plane1);

        expect(airport.getPlanesList().length).toBe(1);
    })

    it('should confirm removal of specified plane from the planes list when it takes off', () => {
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);

        // Act
        airport.landPlane(plane1);
        airport.landPlane(plane2);
        airport.takeOff(plane1);

        expect(airport.isAtAirport(plane1)).toBe(false);
    })

    it('should throw an error when attempting to take off a plane that is not at the airport', () => {
        // Arrange
        let plane1 = new Plane(`a1`);

        expect(() => airport.takeOff(plane1)).toThrowError('The plane cannot take off as is not at the airport.');
    })

    it('should throw an error when landing a plane that has already landed', () => {
        // Arrange
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);

        expect(() => airport.landPlane(plane1)).toThrowError('The plane has already landed.');
    })

    // Extended Acceptance Criteria
    it('should successfully take off a plane when the weather is not stormy', () => {
        // Arrange
        let weather = new Weather(`sunny`);
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);

        // Act
        airport.landPlane(plane1);
        airport.landPlane(plane2);
        airport.setWeather(weather);
        airport.takeOff(plane1);

        expect(airport.getPlanesList().length).toBe(1);
        expect(airport.isAtAirport(plane1)).toBe(false);
    })

    it('should throw an error when attempting to take off a plane in stormy weather conditions', () => {
        // Arrange
        let weather = new Weather();
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);
        weather.setCondition(`stormy`);
        airport.setWeather(weather);

        expect(() => airport.takeOff(plane1)).toThrowError('The plane cannot take off due to the stormy weather.');
    })

    it('should successfully land a plane when the weather is not stormy', () => {
        // Arrange
        let weather = new Weather();
        let plane1 = new Plane(`a1`);

        // Act
        airport.setWeather(weather);
        airport.landPlane(plane1);

        expect(airport.getPlanesList()).toContain(plane1);
    })

    it('should throw an error when attempting to land a plane in stormy weather conditions', () => {
        // Arrange
        let weather = new Weather();
        let plane1 = new Plane(`a1`);

        // Act
        weather.setCondition(`stormy`);
        airport.setWeather(weather);

        expect(() => airport.landPlane(plane1)).toThrowError('The plane cannot land due to the stormy weather.');
    })

    it('should list the planes landed at the airport', () => {
        // Arrange
        let plane1 = new Plane(`a1`);
        let plane2 = new Plane(`a2`);

        // Act
        airport.landPlane(plane1);
        airport.landPlane(plane2);

        expect(airport.getLandedPlanes()).toEqual([plane1, plane2]);
    })
})
