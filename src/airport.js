class Airport {
  constructor() {
    this.planeList = [];
  }

  landPlane(name) {
    this.planeList.push(name)
  }

}

module.exports = { Airport };
