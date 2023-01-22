const Plane = require(`./Plane.js`);

class Airport {

    constructor(maximumCapacity = 10) {
        this.airportPlanes = [];
        this.maximumCapacity = maximumCapacity;
    }


    landPlane = plane => {
        if (plane instanceof Plane) this.airportPlanes.push(plane);
    };

    setCapacity = (input) => {
        this.maximumCapacity = input;
    };

    // maximumCapacityFull = () => {
    //     if (this.airportPlanes.length === this.maximumCapacity) {
    //         return true;
    //     }
    // }

};

module.exports = Airport;
