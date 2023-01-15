const Plane = require(`./Plane`);

class Airport {
  
    planesLanded = [];
    capacity = 10;

    landPlane = plane => {
    if (plane instanceof Plane) this.planesLanded.push(plane);
  };

}

module.exports = Airport;
