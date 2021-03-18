class Airport {
  constructor(designer){
    this.airport = [];
    this.capacity =  4;
    this.designer = designer
  }


  toLand(plane){
    if (!this.airport.includes(plane)){
      if(this.airport.length < this.capacity){
    this.airport.push(plane)
    return this.airport.length
  }
    else {
      if(this.designer=='designer'){
        return 'The capacity of the airport has been increased by 2 additional slots.'
      } else{
      return 'The airport is full'
      }
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
