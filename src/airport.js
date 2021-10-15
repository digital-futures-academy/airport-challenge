class Airport {

    hanger = [];

    constructor() {
        this.planes = this.hanger;
    }

    landPlane(plane) {
        this.hanger.push(plane);
        return `Land this ${plane} at the airport `;
    }
}

module.exports = Airport;