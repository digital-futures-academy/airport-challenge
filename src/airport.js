// const Airplane = require('./airplane');

class Airport {
  //here's a starting point for you
  constructor(airportName){
    this.airportName = airportName;
    this.maxCapacity = 5;
    this.parkedPlanes = [];
  }

  getAirportName(){
    return this.airportName;
  }

  //lands requested plane at airport
  landPlane(airplane){
    let space = this.isAirportFull();
    if (space){
      console.log('can not land plane');
      return false;
    }  else {
      this.parkedPlanes.push(airplane.getAirplaneName())
      return airplane.land()
    }
  }

  changeCapacity(newCapacity){
    return this.maxCapacity=newCapacity;
  }

  isAirportFull(){
    if (this.parkedPlanes.length<this.maxCapacity){
      console.log('There is still space');
      return false
    } else {
      console.log('There is no more space')
      return true
    }
  }

}

module.exports = Airport
