const Plane = require("./plane");


class Airport {
  constructor(planesInAirport, capacity) {
    this.planesInAirport = planesInAirport;
    this.capacity = capacity;
  }
  listOfAirports = [];
  isAirportFull() {
    if (this.capacity === this.planesInAirport.length)
      return `airport is full`;
    return `airport is not full`;
  }
}
const landAPlane = (planeCanLand, plane1) => {
  if (planeCanLand) {
    //airport1.planesInAirport.push(plane1);
  }
  return planeCanLand;
}



// const airport1 = new Airport([Plane.plane3, Plane.plane2, Plane.plane1, Plane.plane4, Plane.plane5], 5);





module.exports = {
  Airport,
  landAPlane
};

