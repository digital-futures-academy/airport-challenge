class Airport {
  planesInAirport = [];


}
const landAPlane = (planeCanLand, plane1) => {
  if (planeCanLand) {
    airport1.planesInAirport.push(plane1);
  }
  return planeCanLand;
}
const airport1 = new Airport();




module.exports = {
  Airport,
  landAPlane
};
