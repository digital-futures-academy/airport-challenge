class Airport {
  // here's a starting point for you

  constructor(airport = []) {
    this.airport = airport;
  }


  landPlane(plane) {
    this.airport.push(plane);
    return this.airport.length;
  }
  
  capacity(num) {
    this.airport.length = num;
    console.log(this.airport.length);
    return this.airport.length;
  }

}


module.exports = Airport;
