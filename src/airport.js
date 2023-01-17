const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity = 9;
  NewDefaultCapacity = null;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
  
  increaseCapacityTo = () => {
    this.NewDefaultCapacity = this.defaultCapacity + 1;
    }
  };



module.exports = Airport;
