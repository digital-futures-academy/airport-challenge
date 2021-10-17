
class Airport {
  constructor(airplanes = [], capacity = 10) {
    this.currentPlanes = airplanes;
    this.capacity = capacity;
  }
  landPlane(plane, weather = 'sunny') {
    if (this.checkIfFull() === false && this.currentPlanes.includes(plane) === false && plane.status === 'flying' && weather === 'sunny') {
      plane.status = 'landed';
      this.currentPlanes.push(plane);
    }
  }
  checkIfFull() {
    if (this.currentPlanes.length === this.capacity) {
      return true;
    }
    else {
      return false;
    }
  }
  setTakeOff(plane, weather = 'sunny') {
    if (weather === 'sunny') {
      this.currentPlanes = this.currentPlanes.filter(planes => planes !== plane);
      plane.status = 'flying';
    }
  };
  checkWeather(weather) {
    return weather.weather;
  }
  isInAirport(plane) {
    if (this.currentPlanes.includes(plane)) {
      return true
    }
    else { return false }
  }
}

module.exports = Airport;
