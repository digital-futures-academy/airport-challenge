class Airport {
    constructor(listPlanes = []) {
        this.listPlanes = listPlanes;
    }

    landPlane(plane) {
        this.listPlanes.push(plane);
    }

    getCurrentCapacity() {
        return this.listPlanes.length;
    }
}

module.exports = Airport;
