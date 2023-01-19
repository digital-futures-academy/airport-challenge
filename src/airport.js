const Plane = require(`../src/Plane`);
class Airport {
  // here's a starting point for you
  airportPlanes = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  fullCapacity = (full) => {
    this.capacity += full;
  };

  raisingCapacity = (newCapacity) => {
    this.capacity = newCapacity;
  };

  takingOff = (idPlane) => {
    let planeIndex = this.airportPlanes.findIndex(
      (plane) => idPlane === plane.id
    );
    planeIndex === -1
      ? console.log(`The plane took off`)
      : this.airportPlanes.splice(planeIndex, 1),
      console.log(`Plane still in the airport`);
  };
}

module.exports = Airport;
