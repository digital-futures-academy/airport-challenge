class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = [];
    this.capacity = 2;
  }

  landed(plane) {
    let planeName = plane.plane_name;
    let planesArr = this.planes;
    let result = planesArr.filter(name => name.plane_name === planeName);

    if (result) {
      return 'Plane has Landed';
    }
    else {
      return 'Plane not yet Landed'
    }

  }

  landPlane(plane) {
    if (this.planes < this.capacity) {
      this.planes.push(plane);
      return this.planes;
    }
    else {
      return `Airport is Full no landing`;
    }

  }

  overrideCapacity(number) {
    this.capacity = number;
    return number;
  }

  takeOff(plane) {

    if (this.landed(plane) === 'Plane has Landed') {

      this.planes.pop(); //pop will work only if there is one refactor required for more than one item in the array

      //Loop through planes array, check if plane exist and slice it off

    }
    else {
      return `Plane has not landed yet`;
    }

    return this.planes;
  }

}

module.exports = Airport;
