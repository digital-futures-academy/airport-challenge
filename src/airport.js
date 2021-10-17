class Airport {

    constructor(listPlanes = [], maxCapacity = 10) {
        this.listPlanes = listPlanes;
        this.maxCapacity = maxCapacity;
    }

    landPlane(plane) {
        this.listPlanes.push(plane);
    }

    getCurrentCapacity() {
        return this.listPlanes.length;
    }

    setMaxCapacity(capacity) {
        this.maxCapacity = capacity;
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }
}

module.exports = Airport;
