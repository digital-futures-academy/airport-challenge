class Airport {

    constructor(listPlanes = [], maxCapacity = 10) {
        this.listPlanes = listPlanes;
        this.maxCapacity = maxCapacity;
    }

    landPlane(plane) {
        if (!this.isAirportFull()) {
            this.listPlanes.push(plane);
        } else {
            console.log('Airport at max capacity, cannot land plane');
        }
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

    isAirportFull() {
        return this.listPlanes.length === this.maxCapacity;
    }
}

module.exports = Airport;
