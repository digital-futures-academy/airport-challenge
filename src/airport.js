class Airport {

  #planesAtAirport = [];
  #capacity = 0;

  constructor(size) {
    this.capacity = size;
  }

  landPlane = (plane) => {
    if (this.checkFull() === false) {
      for (let i = 0; i < this.#planesAtAirport.length; i++) {
        if (this.#planesAtAirport[i].getID() === plane.getID()) {
          return;
        }
      }
      this.#planesAtAirport.push(plane);
    }
  };

  takeoffPlane = (inputID) => {
    for (let i = 0; i < this.#planesAtAirport.length; i++) {
      if (this.#planesAtAirport[i].getID() === inputID) {
        this.#planesAtAirport.splice(i, 1);
        break;
      }
    }
  };

  checkFull() {
    return this.#planesAtAirport.length >= this.capacity;
  }

  setCapacity(value) {
    this.#capacity = value;
  }

  getCapacity() {
    return this.#capacity
  }

  getPlanesAtAirport() {
    return this.#planesAtAirport;
  }
}

class Plane {

  #ID;

  constructor(ID) {
    this.#ID = ID;
  }

  getID() {
    return this.#ID;
  }

}

module.exports = {
  Airport,
  Plane
};
