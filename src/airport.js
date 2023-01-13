const Plane = require('./plane.js');
const Weather = require('./weather.js');

class Airport {
  constructor() {
    this.hangar = [];
    this.weather = new Weather ();
  }

  landPlane = plane =>{
    this.hangar.push(plane)
  }
  takeoffPlane = plane =>{
    this.hangar.pop(plane)
  }
}

module.exports = Airport;
