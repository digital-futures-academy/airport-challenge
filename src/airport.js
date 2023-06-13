class Airport {
    listOfPlanes;
    airportCapacity;
    currentWeather;
    constructor(initialListOfPlanes = [], initialCapacity = 3, initialWeather = "Sunny") {
        this.listOfPlanes = initialListOfPlanes;
        this.airportCapacity = initialCapacity;
        this.currentWeather = initialWeather;
    }
    getPlaneIndex(plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId)
    };
    landPlane(plane) {
        if (plane?.planeId && !this.isAirportFull() && !this.isPlaneInAirport(plane) && !this.isItStormy()) {
            this.listOfPlanes.push(plane);
        }
    };
    changeAirportCapacity(newCapacity) {
        if (typeof newCapacity === "number" && Number.isInteger(newCapacity)) {
            this.airportCapacity = newCapacity;
        }
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
