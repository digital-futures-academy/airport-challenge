class Plane {
  #Id;

  constructor(planeId) {
    this.#Id = planeId;
  }

  getId() {
    return this.#Id;
  }
}

module.exports = Plane;