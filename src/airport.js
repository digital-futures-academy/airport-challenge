class Airport {
  constructor(size) {
    this.planesAtAirport = [];
    this.capacity = size;
  }
  landPlane = (plane) => {
    if (this.checkFull() === false)
      this.planesAtAirport.push(plane)
  };

  takeoffPlane = (inputID) => {
    for (let i = 0; i < this.planesAtAirport.length; i++) {
      if (this.planesAtAirport[i].getID === inputID) {
        this.planesAtAirport.splice(i, 1);
        break;
      }
    }
  };

  checkFull() {
    return this.planesAtAirport.length >= this.capacity;
  }

  set setCapacity(value) {
    this.capacity = value;
  }

  get getCapacity() {
    return this.capacity
  }

  get getPlanesAtAirport() {
    return this.planesAtAirport;
  }
}

class Plane {
  constructor(ID) {
    this.ID = ID;
  }

  get getID() {
    return this.ID;
  }

}

module.exports = {
  Airport,
  Plane
};
