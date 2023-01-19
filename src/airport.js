const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity = 0;
  newCapacity = 10;
  NewDefaultCapacity = null;
  airportFull = true;
  noLandings;
  planeToLand;
  landingPlane;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  getCapacity(){
    return this.defaultCapacity;
  }

  changeCapacity() {
    if (this.newCapacity) {
      this.defaultCapacity = this.newCapacity
    }
  }
  
  atDefaultCapacity () {
    if (this.airportPlanes.length == this.defaultCapacity || this.airportPlanes.length == this.newDefaultCapacity ) {
      this.airportFull = true;
       } 
  }
  
  preventAirportPush() {
    if (this.airportFull == true){
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
