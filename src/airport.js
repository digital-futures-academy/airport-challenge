
class Airport {
  // here's a starting point for you
  airportName;
  capacity;
  currentNoOfPlanes;
  isFull;
  planeList;

  constructor(airportName = 'Earth', capacity = 1, currentNoOfPlanes = 0, isFull = false, planeList = []) {
    this.airportName = airportName;
    this.capacity = capacity;
    this.isFull = isFull;
    this.planeList = planeList;
    this.currentNoOfPlanes = planeList.length;
  }

  landPlane(plane) {

    let index = this.planeList.indexOf(plane.planeID);

    if (index === -1) {

      if (!this.isFull) {
        this.planeList.push(plane);
        this.currentNoOfPlanes = this.planeList.length;
      }
    }

    this.checkIsFull();

  }

  takeOff(plane) {
    if (this.currentNoOfPlanes > 0) {

      let planeIndex = this.planeList.indexOf(plane);

      if (planeIndex > -1) {

        this.planeList.splice(planeIndex, 1);

        this.currentNoOfPlanes = this.planeList.length;

      } else {
        return 'Plane cannot take off because it doesn\'t exist';
      }
    }

    this.checkIsFull();
  }

  checkIsFull() {
    if (this.currentNoOfPlanes >= this.capacity) {
      this.isFull = true;
    } else {
      this.isFull = false;
    }
  }

}

module.exports = Airport;
