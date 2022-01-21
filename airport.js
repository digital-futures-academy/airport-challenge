class Airport {

  capacity;
  landed;


  constructor(capacity = 2) {
    this.capacity = capacity;
    this.landed = [];

  };

  landPlane(plane1) {
    return this.landed.push(plane1)
  };

  isFull() {
    return this.landed.length <= this.capacity;
  };

  reachedCapacity() {
    if (this.landed.length >= this.capacity) {
      return new Error(`No Capacity (${this.landed.length})`)
    }

  };

  confirmPlaneDeparture(plane1) {
    const index = this.landed.findIndex(element => plane1 === element)
    if (index !== -1) {
      this.landed.splice(0);
    }
  };

  preventPlaneLanding() {
    if (this.landed.length === this.capacity) {
      return new Error(`This plane has already landed`)
    }

  };



}




module.exports = Airport;






