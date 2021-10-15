class Airport {
  // here's a starting point for you

  // airport = new Array();
  constructor(airport = []) {

    this.airport = airport;
  }


  landPlane(plane) {
    this.airport.push(plane);
    return this.airport.length;
}

}


module.exports = Airport;
