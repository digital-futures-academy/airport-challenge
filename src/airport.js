class Airport {
  planeArray = [];
  landPlane = function (plane) {
    this.planeArray.push(plane);
    console.log(this.planeArray);
    console.log(`Flight ${plane} has landed.`);
  };
}

module.exports = Airport;
