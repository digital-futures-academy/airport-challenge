class Airport {

  capacity = 50;


  constructor() {
    this.planeList = [];
  }

  landPlane(name) {
    this.planeList.push(name)
  }


};


module.exports = { Airport };
