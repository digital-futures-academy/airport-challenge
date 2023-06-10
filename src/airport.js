class Airport {
  constructor(size) {
    this.planesAtAirport = [];
    this.capacity = size;
  }
  landPlane = (plane) => {
    if (this.checkFull() === false)
      this.planesAtAirport.push(plane)
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
