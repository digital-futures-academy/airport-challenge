class Airport {

  #planesAtAirport = [];
  #capacity = 0;
  #stormy = false;

  constructor(size, isStormy = false) {
    this.#capacity = size;
    this.#stormy = isStormy;
  }

  setCapacity(value) {
    this.#capacity = value;
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

  landPlane = (plane) => {
    if (!this.checkFull() && !this.#stormy && !this.#planesAtAirport.includes(plane)) {
      plane.setAirport(this);
      this.#planesAtAirport.push(plane);
    }
  };

  takeoffPlane = (plane) => {
    if (!this.#stormy) {
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
