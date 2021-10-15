class Airport {

  planes;

  constructor(planes = []) {
    this.planes = planes;
  }

  landPlane(plane) {
    this.planes.push(plane);
  }
}

module.exports = Airport;
