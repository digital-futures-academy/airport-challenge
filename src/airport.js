const Plane = require("./plane");


class Airport {
  constructor(planesInAirport, capacity) {
    this.planesInAirport = planesInAirport;
    this.capacity = capacity;
  }
}
const landAPlane = (planeCanLand, plane1) => {
  if (planeCanLand) {
    airport1.planesInAirport.push(plane1);
  }
  return planeCanLand;
}

const isAirportFull = () => {
  if (airport1.capacity === airport1.planesInAirport.length)
    return `no more landing! airport is full`;
  return `can land`;
}

const airport1 = new Airport([Plane.plane3, Plane.plane2, Plane.plane1, Plane.plane4, Plane.plane5], 5);




module.exports = {
  Airport,
  landAPlane,
  isAirportFull
};

