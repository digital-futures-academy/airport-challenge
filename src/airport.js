  // here's a starting point for you
  class Airport {
  constructor(){
    this.planes  = []
    this.airportCapacity = 3
    this.landedElsewhere = false
    this.isStormy = false
  }

land(plane) {
    if(this.planes.length >= this.airportCapacity) {
      return 'Airport full do not land'
    } else if(!this.planes.includes(plane) && this.landedElsewhere === true) {
        return 'Plane already landed elsewhere'
    } else if(this.planes.includes(plane)) {
         return 'Weather too stormy to land'
    } else { 
      this.planes.push(plane)
        return this.planes  
    }
  } 

remove(plane) {
  if(this.planes.includes(plane)
  ) {let index = this.planes.indexOf(plane)
      this.planes.splice(index, 1)
          return this.planes  
    } 
  }

isLanded(plane) {
    if(this.planes.includes(plane)) {
      return 'Plane already landed'
    } else {
      return 'Please land'
    }
  }

notHere(plane) {
    if(!this.planes.includes(plane)) {
      return 'Plane is not here to take off'
    } else {
      return 'Please take off'
    }
  }

changeCapacity(num){
    this.airportCapacity = num
      return (`The airport capacity has been changed to ${num}`)
  }

  countPlanes(){
    return this.planes.length
  }
}

module.exports = Airport;