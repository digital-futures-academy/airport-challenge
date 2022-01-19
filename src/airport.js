class Airport {
    constructor(capacity = 10, planes = []) {
        this.planes = planes;
        this.capacity = capacity;
    }

    landPlane(plane) {
        if (this.isAirportFull()) return 'Airport is full. Unable to land plane';
        this.planes.push(plane);
    }

    updateCapacity(extra) {
        this.capacity += extra;
    }

    isAirportFull() {
        return this.planes.length >= this.capacity ? true : false;
    }

}

module.exports = Airport;
