class Airport {

  planes;
  defaultCapacity;

  constructor(planes = [], defaultCapacity = 0) {
    this.planes = planes;
    this.defaultCapacity = defaultCapacity;
  }

  landPlane(plane) {
    this.planes.push(plane);
  }

  updateDefaultAirportCapacity(value = int) {
    this.defaultCapacity = value;
  }
}

module.exports = Airport;
