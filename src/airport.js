class Airport {

  #planesAtAirport = [];
  #capacity = 0;
  #stormy = false;

  constructor(size, isStormy = false) {
    size > -1 ? this.#capacity = size : this.#capacity = 0;
    this.#stormy = isStormy;
  }

  setCapacity(value) {
    value > -1 ? this.#capacity = value : this.#capacity = 0;
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
    if (!this.checkFull() && !this.#stormy && !this.#planesAtAirport.includes(plane) && plane.getAirport() === undefined) {
      plane.setAirport(this);
      this.#planesAtAirport.push(plane);
    }
  };

  takeoffPlane = (plane) => {
    if (!this.#stormy && plane.getAirport() === this) {
      this.#planesAtAirport.splice(this.#planesAtAirport.indexOf(plane), 1);
      plane.setAirport(undefined);
    }
  };

  checkFull() {
    return this.#planesAtAirport.length >= this.#capacity;
  }
}

export default Airport;

// module.exports = {
//   Airport,
// };
