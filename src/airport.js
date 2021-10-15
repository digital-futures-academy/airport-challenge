class Airport {
    constructor(listPlanes = [], maxCapacity = 10) {
        this.planes = listPlanes;
        this.maxCapacity = maxCapacity;
    }

    setMaxCapacity(capacity) {
        this.maxCapacity = capacity;
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }

    getCurrentCapacity() {
        return this.planes.length;
    }

    landPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1 && !this.isAirportFull()) {
            this.planes.push(plane);
        } else {
            if (this.isAirportFull()) {
                console.log("airport is full")
            } else {
                console.log('Plane is already at airport');
            }
        }
    }

    sendPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1) {
            console.log('Plane does not exist in airport');
        } else {
            this.planes.splice(indx, 1);
        }
    }

    findPlane(plane) {
        return this.planes.indexOf(plane);
    }

    isPlaneInAirport(plane) {
        return this.planes.indexOf(plane) !== -1;
    }

    isAirportFull() {
        return this.planes.length === this.maxCapacity;
    }
}

module.exports = Airport;
