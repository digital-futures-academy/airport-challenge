class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
    }

    land(plane) {
        if (this.planes.length < this.capacity) {
            this.planes.push(plane);
        } else {
            (console.log(`“Airport is full, do not land”`));
        }
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity
    }
}

module.exports = Airport;