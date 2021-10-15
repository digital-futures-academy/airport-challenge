
class Plane {

  planeID;
  isLanded;

  constructor(planeID = '000', isLanded = false) {
    this.planeID = planeID;
    this.isLanded = isLanded;
  }

}

module.exports = Plane;
