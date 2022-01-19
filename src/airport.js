const Plane = require("./plane");

class Airport {

  #maxPlaneCapacity;
  #airportID;
  #isFull;

  constructor(maxPlaneCapacity = 10, airportID) {
    this.weatherPossibilities = [`sunny`, `cloudy`, `rainy`, `stormy`];
    this.weather;

    this.landedPlanes = [];
    this.#maxPlaneCapacity = maxPlaneCapacity;

    this.#airportID = airportID;
  }
  land(landingPlane) {
    try {
      if (this.assertIsFull()) {
        throw new Error(`Airport is full, ${landingPlane?.planeID ?? `Plane`} cannot land.`);
      }
      this.landedPlanes.push(landingPlane);
      console.log(`${landingPlane?.planeID ?? `Plane`} has landed!`);

    } catch (err) {
      console.log(err.message);
      return err;
    }

    this.assertIsFull();
  }

  takeOff(leavingPlane) {
    try {
      if (this.landedPlanes.length === 0) {
        throw new Error(`${this?.airportID ?? `This airport`} is currently empty of planes.`);
      }
      else if (!this.landedPlanes.includes(leavingPlane)) {
        throw new Error(`${this.landedPlanes?.planeID ?? `Plane`} is not currently at ${this?.airportID ?? `this Airport.`}`);
      }
      let planeToRemove = this.landedPlanes.indexOf(leavingPlane);
      this.landedPlanes.splice(planeToRemove, 1);

    } catch (err) {
      console.log(err.message);
      return err;
    }

    this.assertIsFull();
  }
  getID() {
    return this.#airportID;
  }

  getCapacity() {
    return this.#maxPlaneCapacity;
  }

  getPlanes() {
    return this.landedPlanes;
  }


  setWeather(weatherInput = Math.random()) {
    if ((typeof weatherInput === "number") && (weatherInput < 1)) {
      let flooredInt = Math.floor(weatherInput * this.weatherPossibilities.length)
      this.weather = this.weatherPossibilities[flooredInt];
    } else if ((typeof weatherInput === "number") && (weatherInput < this.weatherPossibilities.length)) {
      Math.floor(weatherInput);
      this.weather = this.weatherPossibilities[weatherInput];
    } else if ((typeof weatherInput === "string") && (this.weatherPossibilities.includes(weatherInput))) {
      this.weather = this.weatherPossibilities[this.weatherPossibilities.indexOf(weatherInput)];
    } else {
      this.setWeather();
      return Error(`weatherInput is not valid. Weather set to random.`);
    }
  }

  assertIsFull() {
    this.#isFull = !(this.landedPlanes.length < this.#maxPlaneCapacity);
    return this.#isFull;
  }
}

module.exports = Airport;

// testAir = new Airport();
// testAir.setWeather(Math.random());
// console.log(testAir.weather);
// console.log(Math.floor(Math.random() * 4));