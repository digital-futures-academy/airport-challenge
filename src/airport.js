class Airport {
  // Should i change the properties to be private?

  constructor(capacity = 3) {
    this.listOfPlanes = [];
    this.capacity = capacity;
  }

  // canTakeOff(plane, weather) {
  //   if (this.id !== plane.airportId) {
  //     return false;
  //   }

  //   if (!weather.allowTakeOff()) {
  //     return false;
  //   }

  //   if (!plane.canTakeOff()) {
  //     return false;
  //   }
  // }

  // canLand(plane, weather) {
  //   if (!plane.getId()) {
  //     return false;
  //   }

  //   if (this.isFull()) {
  //     return false;
  //   }

  //   if (!weather.allowLanding()) {
  //     return false;
  //   }

  //   if (!plane.canLand()) {
  //     return false;
  //   }

  //   return true;
  // }

  // landPlane(plane, weather) {
  //   if (!this.canLand(plane, weather)) {
  //     return;
  //   }

  //   plane.landAt(this);

  //   this.listOfPlanes = [...this.listOfPlanes, plane];
  // }

  landPlane(plane) {
    if (plane.getId() && !this.isFull())
      this.listOfPlanes = [...this.listOfPlanes, plane];
  }

  setCapacity(newCapacity) {
    if (newCapacity > 0 && Number.isInteger(newCapacity))
      this.capacity = newCapacity;
  }

  isFull() {
    return this.listOfPlanes.length === this.capacity;
  }

  takeOffPlane(plane) {
    let planeIndex = this.listOfPlanes.indexOf(plane);
    return this.listOfPlanes.splice(planeIndex, 1);
  }
}

export default Airport;
