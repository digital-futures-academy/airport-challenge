const Plane = require(`./Plane`);

class Airport {
  
    planesLanded = [];
    capacity = 10;

    landPlane = plane => {
    if (plane instanceof Plane) this.planesLanded.push(plane);
    };

    changeCapacity = capacity => {
        if (typeof capacity === Number) this.capacity = capacity;
    }
}

module.exports = Airport;
