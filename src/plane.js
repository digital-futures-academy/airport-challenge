class Plane {
  #id;

  constructor(id) {
    this.#id = id;
  }

  getId() {
    return this.#id;
  }

  // hasLanded() {
  //   return this.status === "LANDED";
  // }

  // canTakeOff() {
  //   if (!this.hasLanded()) {
  //     return false;
  //   }

  //   if (this.airportId === null) {
  //     return false;
  //   }

  //   return true;
  // }

  // canLand() {
  //   if (this.hasLanded()) {
  //     return false;
  //   }

  //   if (this.airportId !== null) {
  //     return false;
  //   }
  //   return true;
  // }

  // landAt(airport) {
  //   this.status = "LANDED";
  //   this.airportId = airport.id;
  // }

  // takeOffFrom(airport) {}
}

export default Plane;
