class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
    }

    land(plane) {
        this.planes.push(plane);
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity
    }
}

module.exports = Airport;