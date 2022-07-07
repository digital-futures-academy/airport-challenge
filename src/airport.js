class Airport {
  // here's a starting point for you

  planesAtAirport = [];
  #capacity

  constructor(capacity = 5) {
    this.#capacity = capacity;
  }

  getCapacity() {
    return this.#capacity;
  }

  setCapacity(newCapacity) {
    this.#capacity = newCapacity;
  }

  isAirportFull() {
    return this.planesAtAirport.length >= this.#capacity;
  }

  takeOffPlane(plane) {
    if (this.isPlaneAtAirport(plane)) {
      this.planesAtAirport.pop(plane);
      return `${plane} has taken off`;
    }
    return `${plane} has not taken off`;
  }

  isPlaneAtAirport(plane) {
    if (this.planesAtAirport.includes(plane)) {
      return true;
    }
    return false;

  }
  //maybe we neeed a property other than includes 

  // how do we get landPlane to understand that isPlaneAtAirport returned false -?


  landPlane(plane) {
    if (this.isAirportFull()) {
      return `airport is full`;
    }
    if (this.isPlaneAtAirport(plane)) {
      return 'the plane is already in the airport';
    } else {
      this.planesAtAirport.push(plane);
      return `confirming that ${plane} has landed`;
    }

  }
}

module.exports = Airport;


//=== true) {
//  return `${ Airport } is full`;