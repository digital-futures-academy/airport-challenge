const Plane = require('./plane.js');
const Weather = require('./weather.js');
class Airport {
    #airportCapacity;
  constructor(airportCapacity = 10, weather) {
    this.#airportCapacity = airportCapacity;
    this.weather = weather;
    this.hangar = [];
  } 

  checkFull(plane) {
    return this.hangar.length < this.#airportCapacity};
  isPlaneInAirport(plane) {
      return this.hangar.findIndex(hangar => hangar.name === plane.name) > -1;
     }

     landPlane(plane) {
      if (this.weather.weather === "stormy") {
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
      if (this.weather.weather === "stormy") {
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
    return this.#airportCapacity;
  }

  set airportCapacity(newCapacity) {
    try {
        if (newCapacity >= 1  && newCapacity < 100) {
            this.#airportCapacity = newCapacity;
        } else {
            throw new Error("Invalid value for airport capacity");
        }
    } catch (error) {
        return this.#airportCapacity;
        console.log(error);
    }}
    
    }

module.exports = {Airport};
