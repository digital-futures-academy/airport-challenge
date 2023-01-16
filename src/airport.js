const Plane = require('./plane.js');
const Weather = require('./weather.js');
const weather = new Weather();

class Airport {
  constructor(airportCapacity = 10) {
    this._airportCapacity = airportCapacity;
    this.weather = weather;
    this.hangar = [];
  }

  checkFull(plane) {
    return this.hangar.length < this._airportCapacity};
  isPlaneInAirport(plane) {
      return this.hangar.findIndex(hangar => hangar.name === plane.name) > -1;
     }

     landPlane(plane) {
      if (this.weather.isStormy()) {
          console.log("It is stormy. No plane can land.");
          return;
      }
      if (!(plane instanceof Plane)) {
          console.log(`ERROR: Input is not an instance of Plane.`);
          return;
      }
      if (this.isPlaneInAirport(plane)) {
          console.log(`ERROR: ${plane.name} is already in the airport!`);
          return;
      }
      if (!this.checkFull(plane)) {
          console.log(`The airport is full, prevent ${plane.name} from landing.`);
          return;
      }
      this.hangar.push(plane);
      console.log(`${plane.name} has landed.`);
  }
  
  takeoffPlane(plane) {
    if (this.weather.isStormy()) {
        console.log("It is stormy. No plane can take off.");
        return;
    }
    if (!(plane instanceof Plane)) {
        console.log(`ERROR: Input is not an instance of Plane.`);
        return;
    }
    if (!this.isPlaneInAirport(plane)) {
        console.log(`ERROR: ${plane.name} is not in the airport`);
        return;
    }
    const indexOfPlaneInHangar = this.hangar.findIndex(hangar => hangar.name === plane.name);
    this.hangar.splice(indexOfPlaneInHangar, 1);
    console.log(`${plane.name} is taking off`);
}
  

  get airportCapacity(){
    return this._airportCapacity;
  }

  set airportCapacity(value) {
    try {
        if (value >= 0) {
            this._airportCapacity = value;
        } else {
            throw new Error("Invalid value for airport capacity");
        }
    } catch (error) {
        console.log(error);
    }
}
}
module.exports = {Airport};
