
class Airport {
  // here's a starting point for you
  location;
  capacity;
  currentNoOfPlanes;
  isFull;
  planeList;

  constructor(location = 'Earth', capacity = 1, currentNoOfPlanes = 0, isFull = false, planeList = []) {
    this.location = location;
    this.capacity = capacity;
    this.isFull = isFull;
    this.planeList = planeList;
    this.currentNoOfPlanes = planeList.length;
  }

  landPlane(plane) {
    if (!this.isFull) {
      this.planeList.push(plane);
      this.currentNoOfPlanes = this.planeList.length;
      return 'Plane has landed';

    } else {
      return 'Plane cannot land';
    }

    if (this.currentNoOfPlanes <= this.capacity) {
      this.isFull = true;
    } else {
      this.isFull = false;
    }
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
  }

}

module.exports = Airport;
