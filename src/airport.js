const Plane = require(`./Plane.js`);

class Airport {

    constructor(maximumCapacity = 10,) {
        this.airportPlanes = [];
        this.maximumCapacity = maximumCapacity;
    };

    landPlane = plane => {
        if (this.airportPlanes.length >= this.maximumCapacity) return this.airportPlanes.length;
        if (plane instanceof Plane) this.airportPlanes.push(plane);
    };

    setCapacity = (input) => {
        this.maximumCapacity = input;
    };

};

module.exports = Airport;
