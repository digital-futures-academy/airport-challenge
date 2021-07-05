const flying = require("./flying.js");

class Airport {
  constructor(name, initialCapacity) {
    this._name = name;
    this._capacity = initialCapacity;
    this._parkedPlanes = [];
  }

  get name() {
    return this._name;
  }

  get capacity () {
    return this._capacity;
  }

  get parkedPlanes () {
    return this._parkedPlanes;
  }

  addAirplane(airplane) {
    this._parkedPlanes += airplane;
  }

  removeAirplane(airplane) {
    index = this._parkedPlanes.indexOf(airplane);
    console.log(index);
    this._parkedPlanes.splice(index, 1);
  }

  isAirplaneHere (airplane) {
    if (this.parkedPlanes.indexOf(airplane) > -1){
      return true;
    }
    else {
      return false;
    }
  }

  increaseCapacity (addtionalCapacity) {
    this._capacity += addtionalCapacity;
  }

  call(airplane, airport){
    let index = airport.parkedPlanes.indexOf(airplane);

    if (index > -1 && this.parkedPlanes.length < this.capacity){
      airplane.land(this);
      // console.log(airport.parkedPlanes);
      airport.removeAirplane;
      // console.log(airport.parkedPlanes);
      this._parkedPlanes += airplane;
    }
  }
}

module.exports = Airport;
