class Airport {
  landed = true

  isLanded() {
    return this.landed;
  }

  landPlane() {
    return this.landed = true;
  }
}

module.exports = Airport;


