class Airport {
    listOfPlanes;
    airportCapacity;
    currentWeather;
    notPlaneError = new Error("Object is not a plane");
    atCapacityError = new Error("The airport is at capacity");
    notAtAirportError = new Error("That plane is not at the airport");
    capacityFormatError = new Error("Invalid capacity");
    alreadyLandedPlaneError = new Error("Cannot land an already landed plane");
    tooStormyError = new Error("The weather is too bad to fly");
    constructor(initialListOfPlanes = [], initialCapacity = 3, initialWeather = "Sunny") {
        this.listOfPlanes = initialListOfPlanes;
        this.airportCapacity = initialCapacity;
        this.currentWeather = initialWeather;
    };
    isPlaneError(plane) {
        if (!plane?.planeId) {
            throw this.notPlaneError;
        }
    };
    isAtCapacityError() {
        if (this.isAirportFull()) {
            throw this.atCapacityError;
        }
    };
    isNotInAirportError(plane) {
        if (!this.isPlaneInAirport(plane)) {
            throw this.notAtAirportError;
        }
    };
    isCapacityFormatError(newCapacity) {
        if (!(typeof newCapacity === "number" && Number.isInteger(newCapacity))) {
            throw this.capacityFormatError;
        }
    };
    isInAirportError(plane) {
        if (this.isPlaneInAirport(plane)) {
            throw this.alreadyLandedPlaneError;
        }
    };
    isItStormyError() {
        if (this.isItStormy()) {
            throw this.tooStormyError;
        }
    };
    getPlaneIndex(plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId)
    };
    landPlane(plane) {
        this.isPlaneError(plane);
        this.isAtCapacityError();
        this.isInAirportError(plane);
        this.isItStormyError();
        this.listOfPlanes.push(plane);
    };
    changeAirportCapacity(newCapacity) {
        this.isCapacityFormatError(newCapacity);
        this.airportCapacity = newCapacity;

    };
    isAirportFull() {
        return this.airportCapacity <= this.listOfPlanes.length;
    };
    takeOff(plane) {
        this.isPlaneError(plane);
        this.isNotInAirportError(plane);
        this.isItStormyError();
        this.listOfPlanes.splice(this.getPlaneIndex(plane), 1);
    };
    isPlaneInAirport(plane) {
        this.isPlaneError(plane);
        return this.getPlaneIndex(plane) !== -1;
    };
    isItStormy() {
        return this.currentWeather === "Stormy";
    };
};
module.exports = Airport;
