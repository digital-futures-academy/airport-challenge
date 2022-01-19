class Airport {
    constructor(capacity = 10, planes = []) {
        this.planes = planes;
        this.capacity = capacity;
    }

    landPlane(plane) {
        this.planes.push(plane);
    }

    updateCapacity(extra) {
        this.capacity += extra;
    }

}

module.exports = Airport;
