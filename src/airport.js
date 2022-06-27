class Airport {
  // here's a starting point for you

 planesAtAirport = []; 

 landPlane(plane) {
 this.planesAtAirport.push(plane);
 console.log(`planesAtAirport length: ${this.planesAtAirport.length}`);
 console.log(this.planesAtAirport);

 return `confirmong that ${plane} has landed`;

  }

}

module.exports = Airport;
