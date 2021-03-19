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

  isFull() {
    return this._hanger.length >= this.capacity
  }

  land(plane) {
    if(this.landingCheck(plane) !== true) return this.landingCheck(plane);
    plane.flying = false;
    this._hanger.push(plane);
    return `Successful landing, ${plane.id} is now in the hangar`;
  }

  landingCheck(plane) {
    if(this._hanger.includes(plane)) return `Cannot land ${plane.id}, it is already in this airport's hangar`;
    if(!plane.flying) return `Cannot land ${plane.id}, it has already landed at a different airport`;
    if(this.isFull()) return "Cannot land yet, the hangar is full";
    return true;
  }

  takeOff(plane) {
    if(this.takeOffCheck(plane) !== true) return this.takeOffCheck(plane);
    this._hanger.splice(this._hanger.indexOf(plane), 1);
    plane.flying = true;
    return `Successful take off, ${plane.id} is in the air`;
  }

  takeOffCheck(plane) {
    if(plane.flying) return `Cannot take off, ${plane.id} is already in the air`;
    if(!this._hanger.includes(plane)) return `Cannot take off, ${plane.id} is not at this airport`;
    return true;
  }
}

module.exports = Airport;
