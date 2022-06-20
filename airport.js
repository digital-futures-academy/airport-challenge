class Airport {

  landedPlanes = [];

  landPlane = inputPlane => {
    this.landedPlanes.push(inputPlane);
    console.log(`this plane has landed.`);
  };
  //2

  airportCapacity = new this.airportCapacity(10);
  newCapacity = [];
  checkingCapacity() {
    return this.airportCapacity;

  }
  changingCapacity = inputCapacity => {
    this.airportCapacity = this.newCapacity.push(inputCapacity);
    return this.airportCapacity;
  };
  // 3 
  capacity = 1;
  planeList = new this.planeList(1);

  isAirportFull = inputPlane => {
    if (this.planeList.length === capacity) {
      return 'airport is full';
    } else {
      this.planeList.push(inputPlane);
    }
  };

  //4
  planeList1 = [`plane1`];
  takeOff() {
    this.planeList1.pop;
    return this.planeList;
  };

  //5
  airportList = [`plane1`, `plane2`, `plane3`];
  confirmingWherePlanesAre = inputPlane => {
    if (this.airportList === inputPlane) {
      return `plane in Airport`;
    }

  };

};
module.exports = Airport;
