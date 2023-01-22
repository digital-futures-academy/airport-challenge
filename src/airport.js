const Plane = require(`./Plane.js`);

class Airport {

    constructor(maximumCapacity = 10) {
        this.airportPlanes = [];
        this.maximumCapacity = maximumCapacity;
    };

    landPlane = plane => {
        if (this.airportPlanes.length >= this.maximumCapacity) {
            return this.airportPlanes.length;
        }

        else if (plane instanceof Plane) {
            this.airportPlanes.push(plane);
        };

    };

    takeoffPlane = plane => {
        if (this.airportPlanes.findIndex(planeManifest => planeManifest.id === plane.id) > -1) {
            this.airportPlanes.splice(planeManifest => planeManifest.id === plane.id, 1);
        }
    };

    setCapacity = (input) => {
        this.maximumCapacity = input;
    };

    planeAtAirport = plane => {
        if (this.airportPlanes.includes(plane)) {
            return true;
        }
        else {
            return false;
        }
    };

};

module.exports = Airport;
