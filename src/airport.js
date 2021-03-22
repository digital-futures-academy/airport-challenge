  // here's a starting point for you
  class Airport {
  constructor(airportCapacity = 3){
    this.planes  = []
    this.airportCapacity = airportCapacity
  }

  land(plane) {
    if(this.isFull()) {
      return 'Airport full do not land'
    } else {
    this.planes.push(plane)
    return this.planes  
    }
  } 

  isFull() {
    if(this.planes.length >= this.airportCapacity) {
      console.log('Airport full do not land')
      return true
    } else {
      // console.log('Airport capacity not reached, please land')
      return false
  }
}

remove(plane) {
      let index = this.planes.indexOf(plane)
      this.planes.splice(index, 1)
      return this.planes 
  }

  check(allPlanes) {
    if(allPlanes === this.planes) {
      return true
    } else {
      return false
    }
  }
}


module.exports = Airport; 