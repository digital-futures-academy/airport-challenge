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
      this.planes.push(plane);
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
}

module.exports = Airport;
