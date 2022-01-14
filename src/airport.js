class Airport {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.planes = [];
    }

    isFull() {
        return this.capacity === this.planes.length;
    }

    landPlane(plane) {
        if (this.isFull())
            throw new Error('Cannot land another plane - capacity is full!');
        if (plane.status === 'landed')
            throw new Error('Cannot land a plane which is already landed.');
        plane.status = 'landed';
        this.planes.push(plane);
    }

    takeOffPlane(id) {
        const planeIdx = this.planes.findIndex((plane) => plane.id === id);
        if (planeIdx === -1) throw new Error(`Plane with id ${id} was not found.`);
        const [plane] = this.planes.splice(planeIdx, 1);
        if (plane.status === 'flying')
            throw new Error('Cannot take off a plane which is already flying.');
        plane.status = 'flying';
    }

    hasPlane(id) {
        return this.planes.some((plane) => plane.id === id);
    }
}

module.exports = Airport;
