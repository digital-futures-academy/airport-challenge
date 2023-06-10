class Airport {
  constructor() {
    this.planesAtAirport = [];
  }
  landPlane = (plane) => { this.planesAtAirport.push(plane) };
}

class Plane {
  constructor() {

  }

}

module.exports = {
  Airport,
  Plane
};
