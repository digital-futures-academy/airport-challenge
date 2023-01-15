const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  landedList = []
  airportCapacity
  
  addPlane(plane) {
    if(plane instanceof Plane){ this.landedList.push(Plane) }
  }

  //capacity 
  varyCapacity(capacity) {
    this.airportCapacity = capacity
  }

  isFullCheck() {
    if (this.landedList.length === this.airportCapacity){ return true}
  }

  removePlane(plane) {
    const myId = this.landedList.findIndex(item => item.id === plane.id)
    if (myId > -1) { this.landedList.splice(myId, 1) }
  }

  checkList(plane) {
    if(this.landedList.includes(plane) === false){ return true }
  }
  // getCapacity(plane) {
  //   if(this.landedList.length < this.airportCapacity){this.addPlane(plane)}
  // }

}

module.exports = Airport;
