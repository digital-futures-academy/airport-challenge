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

    takeOffPlane(id) {
        const planeIdx = this.planes.findIndex((plane) => plane.id === id);
        if (planeIdx === -1) return;
        const [plane] = this.planes.splice(planeIdx, 1);
        plane.status = 'flying';
    }

    hasPlane(id) {
        return this.planes.some((plane) => plane.id === id);
    }
}

module.exports = Airport;
