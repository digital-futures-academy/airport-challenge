class Airport {
  constructor(){
    this.airport = [];
  }
  toLand(plane){
    this.airport.push(plane)
    return this.airport.length
  }


}

module.exports = Airport;
