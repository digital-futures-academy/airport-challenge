class Airport {
  // Should i change the properties to be private?

  constructor(capacity = 3) {
    this.listOfPlanes = [];
    this.capacity = capacity;
    this.id = "KUL";
  }

  canTakeOff(plane, weather) {
    //   if (!weather.allowTakeOff()) {
    //     return false;
    //   }
    if (!plane.canTakeOff(this)) {
      return false;
    }

    return true;
  }

  canLand(plane, weather) {
    if (!plane.getId()) {
      return false;
    }

    if (this.isFull()) {
      return false;
    }
    //   if (!weather.allowLanding()) {
    //     return false;
    //   }
    if (!plane.canLand()) {
      return false;
    }
    return true;
  }

  landPlane(plane) {
    if (!this.canLand(plane)) return;
    plane.landAt(this);
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
    if (!this.canTakeOff(plane)) return;
    const planeIndex = this.listOfPlanes.indexOf(plane);
    return this.listOfPlanes.splice(planeIndex, 1);
  }
}

export default Airport;
