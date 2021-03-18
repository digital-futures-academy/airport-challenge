class Airport {
  constructor(){
    this.airport = [];
    this.capacity =  4;
  }

  toLand(plane){
    if (!this.airport.includes(plane)){
      if(this.airport.length < this.capacity){
    this.airport.push(plane)
    return this.airport.length
  }
    else {
      return 'The airport is full'
    }
  }
    else {
      return 'This plane has already landed'
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
