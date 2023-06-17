class Airport {

  #planesAtAirport = [];
  #capacity = 0;
  #stormy = false;

  constructor(size, isStormy = false) {
    this.#capacity = size;
    this.#stormy = isStormy;
  }

  setCapacity(value) {
    value > -1 ? this.#capacity = value : 0;
  }

  setWeather(isStormy) {
    this.#stormy = isStormy;
  }

  getCapacity() {
    return this.#capacity
  }

  getPlanesAtAirport() {
    return this.#planesAtAirport;
  }

  canLand(plane) {
    return !this.checkFull() && !this.#stormy && !this.#planesAtAirport.includes(plane) && plane.getAirport() === undefined;
  }

  canTakeoff(plane) {
    return !this.#stormy && plane.getAirport() === this
  }

  landPlane = (plane) => {
    if (this.canLand(plane)) {
      plane.setAirport(this);
      this.#planesAtAirport.push(plane);
    }
  };

  takeoffPlane = (plane) => {
    if (this.canTakeoff(plane)) {
      this.#planesAtAirport.splice(this.#planesAtAirport.indexOf(plane), 1);
      plane.setAirport(undefined);
    }
  };

  checkFull() {
    return this.#planesAtAirport.length >= this.#capacity;
  }
}


module.exports = {
  Airport,
};
