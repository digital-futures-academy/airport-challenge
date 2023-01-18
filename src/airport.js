const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity = 0;
  NewDefaultCapacity = null;
  airportFull;
  noLandings;
  planeToLand;
  landingPlane;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  increaseCapacityTo = () => {
    this.NewDefaultCapacity = this.defaultCapacity + 1;
  }

  decreaseCapacityTo = () => {
     this.NewDefaultCapacity = this.defaultCapacity - 1;
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

  landCorrectPlane() {
    
    if (this.flightNumber === this.planeToLand) {
      this.landingPlane = true;
    }
  
  }
};
  

module.exports = Airport;
