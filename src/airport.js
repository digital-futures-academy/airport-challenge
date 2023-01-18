const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity = 0;
  NewDefaultCapacity = null;
  airportFull;
  noLandings;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
  
  increaseCapacityTo = () => {
    this.NewDefaultCapacity = this.defaultCapacity + 1;
  }
  
  atDefaultCapacity () {
    if (this.airportPlanes.length == this.defaultCapacity || this.airportPlanes.length == this.newDefaultCapacity ) {
      this.airportFull = true;
       } 
  }
  
  preventAirportPush() {
    if (this.airportPlanes.length == this.defaultCapacity || this.airportPlanes.length == this.newDefaultCapacity) {
      this.noLandings = true;
    }
  }
};
  




module.exports = Airport;
