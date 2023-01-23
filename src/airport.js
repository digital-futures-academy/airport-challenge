const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];
  defaultCapacity;
  newCapacity;
  airportFull;
  noLandings;
  planeToLand;
  landingPlane;

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  landCorrectPlane() {
    if (this.flightNumber === this.planeToLand) {
      this.landingPlane = true;
    }
  }

  getCapacity() {
    this.defaultCapacity = 0;
    return this.defaultCapacity;
  }

  changeCapacity() {
    this.newCapacity = 10;
    if (this.newCapacity) {
      this.defaultCapacity = this.newCapacity
    }
  }
  
  atDefaultCapacity() {
    this.defaultCapacity = 0;
    if (this.airportPlanes.length == this.defaultCapacity || this.airportPlanes.length == this.newCapacity ) {
      this.airportFull = true;
       } 
  }
  
  preventAirportPush() {
    this.airportFull = true
    if (this.airportFull == true){
      this.noLandings = true;
    } else {
      this.airport.airportPlanes.push(plane);
    }
  }

};
  
module.exports = Airport;
