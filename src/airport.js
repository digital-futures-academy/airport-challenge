class Airport {
  // Should i change the properties to be private?

  constructor(capacity = 3, id = "KUL", weather) {
    this.listOfPlanes = [];
    this.capacity = capacity;
    this.id = id;
    this.weather = weather;
  }

  canTakeOff(plane) {
    if (!this.weather.allowTakeOff()) {
      return false;
    }

    if (!plane.canTakeOff(this)) {
      return false;
    }

    return true;
  }

  canLand(plane) {
    if (!plane.getId()) {
      return false;
    }

    if (this.isFull()) {
      return false;
    }

    if (!this.weather.allowLanding()) {
      return false;
    }

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

  hasPlane(planeToCheck) {
    return this.listOfPlanes
      .map((plane) => plane.getId())
      .includes(planeToCheck.getId());
  }
}

export default Airport;
