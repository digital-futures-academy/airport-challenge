class Airport {

  planes;
  defaultCapacity;
  status = false;

  constructor(planes = [], defaultCapacity = 10) {
    this.planes = planes;
    this.defaultCapacity = defaultCapacity;

    this.#updateAirportStatus();
  }

  #updateAirportStatus() {
    if (this.planes.length >= this.defaultCapacity) {
      this.status = true;
    }
    else {
      this.status = false;
    }
  }

  landPlane(plane) {
    if (!this.status && (this.planes.length + 1) <= this.defaultCapacity) {
      if (!this.isPlaneAtAirport(plane)) {
        this.planes.push(plane);
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
      const index = this.planes.indexOf(plane);
      if (index > -1) {
        this.planes.splice(index, 1);
      }
    }
    this.#updateAirportStatus();
  }

  isPlaneAtAirport(plane) {
    if (this.planes.includes(plane)) {
      return true;
    }
    return false;
  }
}

module.exports = Airport;
