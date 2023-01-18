const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity = 0;
  NewDefaultCapacity = null;
  airportFull;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
  
  increaseCapacityTo = () => {
    this.NewDefaultCapacity = this.defaultCapacity + 1;
  }
  
  atDefaultCapacity () {
    if (this.airportPlanes.length == this.defaultCapacity) {
      this.airportFull = true;
       } 
    }
};
  




module.exports = Airport;
