const Plane = require(`./Plane`);

class Airport {
  
  planesLanded = [];

  landPlane = plane => {
    this.planesLanded.push(plane);
  };

}

module.exports = Airport;
