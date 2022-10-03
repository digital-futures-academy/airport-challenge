class Airport {

  constructor(capacity = 3) {
    this.airportPlanes = [];
    this.capacity = capacity;
  };

  land(plane) {
    console.log(`   **** ${plane} LANDED SAFELY.****`);
    this.airportPlanes.push(plane);
  };

  takeOff(plane) {
    //if (this.airportPlanes.includes(plane) === true) {
    // this.airportPlanes = this.airportPlanes.filter(value => !plane.includes(plane));
    // }
    this.airportPlanes.pop();
    console.log(`   **** ${plane} TOOK OFF!! ****`);
    console.log("Planes still in the airport: " + this.airportPlanes.join(", "));
  };

  checkFull() {
    if (this.airportPlanes.length === this.capacity) {
      return true
    }
  };

};

module.exports = Airport;
