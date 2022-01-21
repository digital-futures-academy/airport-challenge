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

  getParkedPlanes(){
    console.log(this.parkedPlanes)
    return this.parkedPlanes;
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
    if (!newCapacity || Number.isInteger(newCapacity)===false){
      console.log(`new max capacity is not an integer`);
      return false;
    }
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

  takeOffPlane(airplane){
    let airplaneName = airplane.getAirplaneName();
  
    if (this.parkedPlanes.includes(airplaneName)){
      let updatedParkedPlanes = this.parkedPlanes.filter(airplane => airplane!=airplaneName)
      this.parkedPlanes = updatedParkedPlanes;
      console.log(`the parked planes are now ${this.parkedPlanes}`)
      airplane.takeOff();
      return true
    } else {
      console.log('airplane is not in this airport');
      return false
    }
  }
}

module.exports = Airport
