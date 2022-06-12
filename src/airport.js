class Airport {
  constructor(undefined, capacity) {
    this.planesInAirport = [];
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
  if (airport1.capacity === airport1.planesInAirport.length)`airport is full`;
}

const airport1 = new Airport();




module.exports = {
  Airport,
  landAPlane,
  isAirportFull
};
