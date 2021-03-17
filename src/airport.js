class Airport {
  constructor() {
    this._hanger = [];
  }

  get hanger() {
    return this._hanger;
  }

  land(plane) {
    if(plane.flying === false) return "Cannot land plane, it is not flying"
    plane.flying = false;
    this._hanger.push(plane);
    return this._hanger;
  }

}

module.exports = Airport;
