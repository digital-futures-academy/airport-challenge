  // here's a starting point for you
  class Airport {
  constructor(airportCapacity = 2){
    this.planes  = []
    this.airportCapacity = airportCapacity
  }

  land(plane) {
    this.planes.push(plane)
    return this.planes  
  } 

   /*checkPlane(plane) {
    this.plane = plane
    if(this.check(this.plane)) {
      if(this.planes()) {
        for(let i = 0; i < this.planes.length; i++) {
          if(this.plane[i] === this.plane) {
            return true
          } else {
            return false
          }
        }
      }
    }
  } */ 

  isFull() {
    if(this.planes.length >= this.airportCapacity) {
      console.log('Airport full do not land')
      return true
    } else {
      console.log('Airport capacity not reached, please land')
      return false
  }
}

remove(plane) {
    this.plane = plane
    if(this.planes.includes(this.plane)) {
      let index = this.planes.indexOf(this.plane)
      this.planes.splice(index, 1)
      return this.planes 
    } else {
      console.error('Airplane not at Airport')
      return false
  }
}
}
/*
check(allPlanes) {
  if(allPlanes === this.planes) {
    return true
  } else {
    return false
  }
}
/*
checkPlaneRemoved(plane) {
  this.plane = plane
  if(this.check(this.plane)) {
    if(this.planes()) {
      for(let i = 0; i < this.planes.length; i++) {
        if(this.plane[i] === this.plane) {
          return false
        } else {
          return true
        }
      }
    }
  }
} */
/*
check(allPlanes) {
  if(allPlanes === this.planes) {
    return true
  } else {
    return false
  }
}
*/


module.exports = Airport; 