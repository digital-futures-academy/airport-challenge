class Airport {
  constructor() {
  this.capacity= 300
}
  landPlane = (plane) => {
    return 'you are free to land' + plane
  }
  changeCapacity = (capacity) => {
    this.capacity = capacity
    return this.capacity
  }
}
module.exports = Airport;
// let gatwick = new Airport()

// console.log(gatwick.landPlane('falcon7x'))