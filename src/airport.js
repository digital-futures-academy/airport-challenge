class Airport {
  capacity = 10;
  planeArray = [];
  landPlane = function (plane) {
    this.planeArray.push(plane);
    console.log(
      `Flight ${this.planeArray[this.planeArray.length - 1]} has landed.`
    );
  };
  setCapacity = function (newCapacity) {
    this.capacity = newCapacity;
  };
}

module.exports = Airport;
