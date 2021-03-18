class Airport {
  constructor(){
    this.airport = [];
  }
  toLand(plane){
    if (!this.airport.includes(plane)){
    this.airport.push(plane)
    return this.airport.length
  }
    else {
      return 'This plane has already landed.'
    }
  }

  toTakeOff(plane){
    if(this.airport.includes(plane)){
    let index = this.airport.indexOf(plane)
    this.airport.splice(index, 1)
    return this.airport.length
  }
    else{ return 'The plane is not at this airport'
  }
  }
}

module.exports = Airport;
