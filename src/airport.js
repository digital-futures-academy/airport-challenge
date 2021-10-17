class Airport {
  constructor(capacity = 3) {
    this.capacity = capacity;
    this.planes = []
  }
  landed(plane) {
    this.planes.push(plane)
    return this.planes;
  }
  isFull() {
    return this.planes.length >=
      this.capacity;
  }



}
module.exports = Airport;




