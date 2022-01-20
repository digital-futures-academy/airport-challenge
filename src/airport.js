class Airport {
    constructor(capacity = 10, planes = []) {
        this.planes = planes;
        this.capacity = capacity;
    }

    landPlane(plane) {
        if (this.isAirportFull()) return 'Airport is full. Unable to land plane';
        this.planes.push(plane);
        plane.status = 'landed';
    }

    takeOff(plane) {
        this.planes.splice(this.planes.indexOf(plane), 1);
        plane.status = 'flying';
    }

    updateCapacity(extra) {
        this.capacity += extra;
    }

    isAirportFull() {
        return this.planes.length >= this.capacity ? true : false;
    }

    isPlaneAtAirport(plane) {
        if (this.planes.indexOf(plane) < 0) return false;
        return true;
    }

}

module.exports = Airport;
