class Airport {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.planes = [];
    }

    landPlane(plane) {
        if (this.capacity === this.planes.length)
            throw new Error('Cannot land another plane - capacity is full!');
        plane.status = 'landed';
        this.planes.push(plane);
    }
}

module.exports = Airport;
