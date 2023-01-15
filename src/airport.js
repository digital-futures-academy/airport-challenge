const Plane = require(`./Plane`);

class Airport {
  
    planesLanded = [];

    landPlane = plane => {
    if (plane instanceof Plane) this.planesLanded.push(plane);
  };

}

module.exports = Airport;
