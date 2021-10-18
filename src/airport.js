class Airport {
  constructor(defaultCapacity = 2) {
    this.planes = [];
    this.defaultCapacity = defaultCapacity;
  }

  landPlane(newPlane) {
    if (this.isPlaneAtAirport(newPlane) === false && this.stormyWeather() === false) {
      this.planes.push(newPlane);
    }
    else {
      return false;
    }
  }

  isFull() {
    if (this.planes.length >= this.defaultCapacity) {
      return true;
    }
  }

  takeoffPlane(newPlane) {
    if (this.isPlaneAtAirport(newPlane) === true && this.stormyWeather() === false) {
      this.planes.pop(newPlane);
    }
    else {
      return false;
    }
  }

  isPlaneAtAirport(newPlane) {
    if (this.planes.includes(newPlane)) {
      return true;
    }
    else {
      return false;
    }
  }

  stormyWeather() {
    if (Math.random() > 0.8) {
      return true;
    }
    else {
      return false;
    }
  }
}
module.exports = Airport;
