class Airport {
  constructor(capacity = 2) {
    if(typeof capacity !== 'number' || capacity < 0 || capacity % 2 !== 0) {
      throw new Error("Hangar capacity must be a positive integer");
    } else this._capacity = capacity;
    this._hanger = [];
  }

  get hanger() {
    return this._hanger;
  }

  get capacity() {
    return this._capacity;
  }

  land(plane) {
    if(plane.flying === false) return "Cannot land plane, it is not flying"
    plane.flying = false;
    this._hanger.push(plane);
    return this._hanger;
  }

}

module.exports = Airport;
