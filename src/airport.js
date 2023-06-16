class Airport {
    listOfPlanes;
    airportCapacity;
    currentWeather;
    notPlaneError = new Error("Object is not a plane")
    constructor(initialListOfPlanes = [], initialCapacity = 3, initialWeather = "Sunny") {
        this.listOfPlanes = initialListOfPlanes;
        this.airportCapacity = initialCapacity;
        this.currentWeather = initialWeather;
    }
    isPlane(plane) {
        if (!plane?.planeId) {
            throw this.notPlaneError;
        }
        return true;
    }
    getPlaneIndex(plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId)
    };
    landPlane(plane) {
        this.isPlane(plane);
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
        if (this.isPlaneInAirport(plane) && !this.isItStormy()) {
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
