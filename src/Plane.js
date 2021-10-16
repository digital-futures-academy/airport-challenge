
class Plane {

  planeID;
  isLanded;
  currentLocation;

  constructor(planeID = '000', isLanded = false, currentLocation = 'flying') {
    this.planeID = planeID;
    this.isLanded = isLanded;
    this.currentLocation = currentLocation;
  }

}

module.exports = Plane;
