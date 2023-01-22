const Plane = require(`./Plane.js`);

class Airport {
    airportPlanes = [];
    maximumCapacity;

    landPlane = plane => {
        if (plane instanceof Plane) this.airportPlanes.push(plane);
        if (this.airportPlanes.length >= this.maximumCapacity) {
            return console.log(`The airport has reached maximum capacity`)
        }
    };

    setCapacity = () => {
        this.maximumCapacity = 10;
    };

};

module.exports = Airport;
