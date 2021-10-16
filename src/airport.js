const Plane = require('./plane.js');

class Airport {

  planes;
  defaultCapacity;
  status = false;
  stormyWeather;

  constructor(planes = [], defaultCapacity = 10) {
    this.planes = planes;
    this.defaultCapacity = defaultCapacity;

    this.#updateAirportStatus();
    this.#determineWeather();
  }

  #updateAirportStatus() {
    if (this.planes.length >= this.defaultCapacity) {
      this.status = true;
    }
    else {
      this.status = false;
    }
  }

  #determineWeather() {
    const weatherChance = Math.floor(Math.random() * 101);

    if (weatherChance < 80) {
      this.stormyWeather = false;
    }
    else {
      this.stormyWeather = true;
    }
  }

  landPlane(plane) {
    if (!this.status && (this.planes.length + 1) <= this.defaultCapacity) {
      if (!this.isPlaneAtAirport(plane) && !this.stormyWeather) {
        this.planes.push(new Plane(plane, true));
      }
      else {
        console.log("Plane is unable to land due to stormy weather.");
      }
      this.#updateAirportStatus();
    }
    else {
      console.log("Unable to land plane, airport is full.");
    }
  }

  updateDefaultAirportCapacity(value = int) {
    this.defaultCapacity = value;
    this.#updateAirportStatus();
  }

  takeOff(plane) {
    if (this.isPlaneAtAirport(plane)) {
      const index = this.#findIndexOfPlane(plane);
      if (!this.stormyWeather && index > -1) {
        this.planes.splice(index, 1);
      }
      else {
        console.log("Plane is unable to take off due to stormy weather.");
      }
    }
    this.#updateAirportStatus();
  }

  #findIndexOfPlane(plane) {
    let index = -1;
    for (let i = 0, j = this.planes.length; i < j; i++) {
      if (this.planes[i].name === plane) {
        index = i;
      }
    }
    return index;
  }

  isPlaneAtAirport(plane) {
    let atAirport = false;
    for (let i = 0, j = this.planes.length; i < j; i++) {
      if (this.planes[i].name === plane) {
        atAirport = true;
      }
    }
    return atAirport;
  }

  numberOfPlanesAtAirport() {
    let count = 0;
    for (let i = 0, j = this.planes.length; i < j; i++) {
      if (this.planes[i].landed) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Airport;
