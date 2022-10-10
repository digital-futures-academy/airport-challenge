class Airport {
  landed = true || false;
  capacity = 100;

  isLanded() {
    return this.landed;
  }

  landPlane() {
    //if (value !== undefined && value < this.capacity) {
    //  return this.landed = true;
    //} else {
    //return new Error(`Cannot land, airport is full`)
    // this.landed = false;
    if (this.capacity < 100) {

      return this.landed = true;
    } else {
      return this.landed = false;
    }
  }

  getCapacity() {
    return this.capacity;
  }
  setCapacity(value) {
    if (value < 0) {
      value = 0;
    }
    this.capacity = value;
  }

}


module.exports = Airport;


