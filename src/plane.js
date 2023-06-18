class Plane {
  #id;
  #status;
  #airportId;

  constructor(id) {
    this.#id = id;
    this.#status = "IN_FLIGHT";
    this.#airportId = null;
  }

  getId() {
    return this.#id;
  }

  hasLanded() {
    return this.#status === "LANDED" && this.#airportId !== null;
  }

  canTakeOff(airport) {
    if (!this.hasLanded()) {
      return false;
    }

    if (this.#airportId !== airport.id) {
      return false;
    }

    return true;
  }

  canLand() {
    if (this.hasLanded()) {
      return false;
    }

    if (this.#airportId !== null) {
      return false;
    }
    return true;
  }

  landAt(airport) {
    this.#status = "LANDED";
    this.#airportId = airport.id;
  }

  takeOffFrom(airport) {
    if (!this.canTakeOff(airport)) return;

    this.#status = "IN_FLIGHT";
    this.#airportId = null;
  }
}

export default Plane;
