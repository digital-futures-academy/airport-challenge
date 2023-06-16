class Airport {
    listOfPlanes;
    airportCapacity;
    currentWeather;
    notPlaneError = new Error("Object is not a plane");
    atCapacityError = new Error("The airport is at capacity");
    notAtAirportError = new Error("That plane is not at the airport")
    constructor(initialListOfPlanes = [], initialCapacity = 3, initialWeather = "Sunny") {
        this.listOfPlanes = initialListOfPlanes;
        this.airportCapacity = initialCapacity;
        this.currentWeather = initialWeather;
    }
    isPlaneError(plane) {
        if (!plane?.planeId) {
            throw this.notPlaneError;
        }
    }
    isAtCapacityError() {
        if (this.isAirportFull()) {
            throw this.atCapacityError;
        }
    }
    isAtAirportError(plane) {
        if (!this.isPlaneInAirport(plane)) {
            throw this.notAtAirportError;
        }
    }
    getPlaneIndex(plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId)
    };
    landPlane(plane) {
        this.isPlaneError(plane);
        this.isAtCapacityError();
        if (!this.isAirportFull() && !this.isPlaneInAirport(plane) && !this.isItStormy()) {
            this.listOfPlanes.push(plane);
        }
    };
    changeAirportCapacity(newCapacity) {
        if (typeof newCapacity === "number" && Number.isInteger(newCapacity)) {
            this.airportCapacity = newCapacity;
            return;
        }
        throw new Error("Invalid capacity");
    };
    isAirportFull() {
        return this.airportCapacity <= this.listOfPlanes.length;
    };
    takeOff(plane) {
        this.isPlaneError(plane);
        this.isAtAirportError(plane);
        if (!this.isItStormy()) {
            this.listOfPlanes.splice(this.getPlaneIndex(plane), 1);
        }
    };
    isPlaneInAirport(plane) {
        return this.getPlaneIndex(plane) !== -1;
    };
    isItStormy() {
        return this.currentWeather === "Stormy";
    };
};
module.exports = Airport;
