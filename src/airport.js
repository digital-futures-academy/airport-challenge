class Airport {
    constructor(listPlanes = []) {
        this.planes = listPlanes;
    }

    landPlane(plane) {
        this.planes.push(plane);
    }
}

module.exports = Airport;
