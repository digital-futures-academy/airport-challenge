class Airplane {

  constructor() {
    this.status = false;
  }

  land() {
    this.status = true;
    return this.status
  }

  takeoff() {
    this.status = false;
    return this.status
  }

  isLanded() {
    return this.status
  }

}

module.exports = Airplane
