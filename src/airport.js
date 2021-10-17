class Airport {
  constructor(capacity = 10) {
    this.capacity = 10;
    this.planes = []
  }
  landed(plane) {
    this.planes.push(plane)
    return this.planes;
  }



}
module.exports = Airport;




