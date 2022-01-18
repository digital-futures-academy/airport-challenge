const Plane = require("./plane");

class Airport {
  // here's a starting point for you
  constructor(maxPlaneCapacity = 10, airportID) {
    this.weatherPossibilities = [`sunny`, `cloudy`, `rainy`, `stormy`];
    this.weather;

    this.landedPlanes = [];
    this.maxPlaneCapacity = maxPlaneCapacity;

    this.airportID = airportID;
  }
  land(landingPlane) {
    if ((landingPlane instanceof Plane) && (this.landedPlanes.length < this.maxPlaneCapacity)) {
      this.landedPlanes.push(landingPlane);
    }
  }

  takeOff(leavingPlane) {
    if (this.landedPlanes.includes(leavingPlane)) {
      let planeToRemove = this.landedPlanes.indexOf(leavingPlane);
      this.landedPlanes.splice(planeToRemove);

    }
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
}

module.exports = Airport;

// testAir = new Airport();
// testAir.setWeather(Math.random());
// console.log(testAir.weather);
// console.log(Math.floor(Math.random() * 4));