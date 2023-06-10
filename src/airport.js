class Airport {
  constructor(size) {
    this.planesAtAirport = [];
    this.capacity = size;
  }
  landPlane = (plane) => { this.planesAtAirport.push(plane) };
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
