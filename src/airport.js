class Airport {
  capacity = 10;
  planeArray = [];
  landPlane = function (plane) {
    this.planeArray.push(plane);
    if (this.capacity >= this.planeArray) {
      return `Flight ${
        this.planeArray[this.planeArray.length - 1]
      } has landed.`;
    }
    if (this.capacity === this.planeArray.length) {
      return 'Airport capacity has been reached.';
    }
  };
  setCapacity = function (newCapacity) {
    this.capacity = newCapacity;
  };
}

module.exports = Airport;
