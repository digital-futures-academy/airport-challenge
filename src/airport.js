class Airport {
  constructor(capacity = 5, weather = Math.random()) {
    this.onGround = [];
    this.capacity = capacity;
    this.weather = weather;
  }
  land(plane) {
    const planeIds = this.onGround.map(x => x.id);
    if (!planeIds.includes(plane.id) && this.weather > 0.1) {
      this.onGround.push(plane);
    } else {
      console.log(`The plane with id: ${plane.id} cannot land`);
      return null;
    }

  }
  isFull() {
    return (this.onGround.length === this.capacity) ? true : false;
  }
  takeOff(plane) {
    const planeIds = this.onGround.map(x => x.id);
    if (planeIds.includes(plane.id) && this.weather > 0.1) {
      let index = planeIds.indexOf(plane.id);
      let removedPlane = this.onGround.splice(index, 1);
      return removedPlane[0];
    } else {
      console.log(`The plane with id: ${plane.id} cannot take off`)
      return null;
    }

  }
  changeWeather(weather = Math.random()) {
    this.weather = weather;
  }

}

module.exports = Airport;
