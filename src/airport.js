class Airport {
  constructor (capacity = 2) {
    this.planes = []
    this.capacity = capacity
  }

  // here's a starting point for you
  land (plane) {
    if (this.planes.length >= this.capacity) {
      return 'soz, airport full'
    } else if (this.planes.includes(plane)) {
      return 'soz, plane already landed at the airport'
    } else if (plane.isLanded()) {
      return 'soz, plane already landed elsewhere'
    } else {
      this.planes.push(plane)
      plane.land()
      return this.planes
    }
  }

  takeoff (plane) {
    if (!plane.isLanded()) {
      return 'soz, plane already taken off'
    } else if (!this.planes.includes(plane)) {
      return 'soz, plane not here'
    } else {
      const index = this.planes.indexOf(plane)
      this.planes.splice(index, 1)
      plane.takeoff()
      return this.planes
    }
  }
}

module.exports = Airport
