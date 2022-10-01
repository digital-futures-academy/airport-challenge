class Airport {
  planeArray = [];
  landPlane = function (plane) {
    this.planeArray.push(plane);
    let newArrival = this.planeArray[this.planeArray.length - 1];
    // console.log(this.planeArray);
    console.log(`Flight ${newArrival} has landed.`);
  };
}

module.exports = Airport;
