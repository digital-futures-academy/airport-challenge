const plane = require(`../src/Plane`);
class Airport {

    planes;

    constructor() {
        this.planes = [];
    }
    getNumberOfPlane() {
        return this.planes.length;
    }

    landPlane(planeToAdd) {
        this.planes.push(planeToAdd);
    }

}

module.exports = Airport;