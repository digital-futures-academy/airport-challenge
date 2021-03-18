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
    if(plane.flying === false) return "Cannot land plane, it is not flying";
    if(this.isFull()) return "Cannot land yet, the hangar is full";
    plane.flying = false;
    this._hanger.push(plane);
    return `Successful landing, ${plane.id} is now in the hangar`;
  }
}

module.exports = Airport;
