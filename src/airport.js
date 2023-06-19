class Airport {

    planes;

    constructor() {
        this.planes = [];
    }
    getNumberOfPlane() {
        return this.planes.length;
    }

}

module.exports = Airport;