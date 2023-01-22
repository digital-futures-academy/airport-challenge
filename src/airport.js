const Plane = require(`./plane`);
const Weather = require('./weather')

class Airport {
  // here's a starting point for you
  arrivedPlanes = [];

  constructor(capacity = 5) {
    this.capacity = capacity;
    this.arrivedPlanes = [];
    this.weather = new Weather; 
    
  }

  planesOnGround = plane => {
    if (plane instanceof Plane) {
      this.arrivedPlanes.push(plane);
    }
  };

  isFull = () => {
    return this.arrivedPlanes.length >= this.capacity
  }

  notClearForLanding = plane => {
    if (this.isFull() && this.arrivedPlanes.push(plane)) {
      return "The airport is not clear for landing "

    }
  };

  landPlane = plane => {
    if (plane instanceof Plane && !this.isFull()) {
    
      if (this.arrivedPlanes.find(p => p.id === plane.id)) {
        return false;
      }
      this.arrivedPlanes.push(plane);
      return true;
    } else if (this.weather.weatherStatus === `stormy`) {
      return false;
    }
    return false;
  };



  flyPlane = plane => {
    const indexOfPlaneInAirport = this.arrivedPlanes.findIndex(arrivedPlanes => arrivedPlanes.id === plane.id);

    if (indexOfPlaneInAirport > -1 && this.weather.weatherStatus === `sunny`) {
      this.arrivedPlanes.splice(indexOfPlaneInAirport, 1);
      return true;
    }
    return false;
  };
}
module.exports = Airport;
