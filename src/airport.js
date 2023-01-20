const Plane = require(`./plane`);
const Weather = require('./weather')

class Airport {

  constructor(capacity = 10) {
    this.landedPlanes = [];
    this.capacity = capacity;
    this.Weather = new Weather();
  };

  isFull = () => {
    if (this.capacity === this.landedPlanes.length)
      return true;
  };

  landPlane = plane => {
    if (plane instanceof Plane && !this.isFull()) {
      //Check if plane is already landed.
      if (this.landedPlanes.find(p => p.id === plane.id)) {
        return false;
      }
      this.landedPlanes.push(plane);
      return true;
    } else if (this.Weather.weatherStatus === `stormy`) {
      return false;
    }
    return false;
  };

  flyPlane = plane => {

    const indexOfPlaneInAirport = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);

    if (indexOfPlaneInAirport > -1 && this.Weather.weatherStatus === `sunny`) {
      this.landedPlanes.splice(indexOfPlaneInAirport, 1);
      return true;
    }
    return false;
  };

}

module.exports = Airport;

// previous attempt for reference 

  // landedPlanes = [];
  // maximumCap;

  // constructor(capacity = 10, maximumCap) {
  //   this.capacity = capacity;
  //   this.maximumCap = maximumCap;
  // }
  // landPlane(plane) {
  //   if (plane instanceof Plane && !this.isFull) {
  //     const groundedPlane = this.landedPlanes.some(p => p.id === plane.id);
  //     if (!groundedPlane) {
  //       this.landedPlanes.push(plane);
  //     }
  //   }
  // }

  // }

  // flyPlane(plane) {
  //   const indexOfPlaneInAirport = this.landedPlanes.findIndex(groundedPlane => groundedPlane.id === plane.id);
  //   if (indexOfPlaneInAirport > -1) {
  //     this.landedPlanes.splice(indexOfPlaneInAirport, 1);
  //   }
  // }