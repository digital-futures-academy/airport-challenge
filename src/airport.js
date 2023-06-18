class Airport {
  // Should i change the properties to be private?
  #capacity;
  #weather;

  constructor(capacity = 3, id = "KUL", weather) {
    this.listOfPlanes = [];
    this.capacity = capacity;
    this.id = id;
    this.weather = weather;
  }

  get capacity() {
    return this.#capacity;
  }

  set capacity(newCapacity) {
    if (newCapacity >= 0 && Number.isInteger(newCapacity)) {
      this.#capacity = newCapacity;
    }
  }

  get weather() {
    return this.#weather;
  }

  set weather(newWeather) {
    if (
      typeof newWeather?.allowLanding !== "function" ||
      typeof newWeather?.allowTakeOff !== "function"
    ) {
      throw Error("Invalid weather.");
    }
    this.#weather = newWeather;
  }

  isFull() {
    return this.listOfPlanes.length === this.capacity;
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

  takeOffPlane(plane) {
    if (!this.canTakeOff(plane)) return;
    const planeIndex = this.listOfPlanes.indexOf(plane);
    return this.listOfPlanes.splice(planeIndex, 1)[0];
  }

  hasPlane(planeToCheck) {
    return this.listOfPlanes
      .map((plane) => plane.getId())
      .includes(planeToCheck.getId());
  }
}

export default Airport;
