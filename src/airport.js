class Airport {
    constructor(plane){
        this.plane = plane
        this.airport = []
        this.capacity = 5
      }

  land(plane){
      if (this.airport.includes(plane)){
        return `${plane} has already landed`
      } else if (this.airport.length > 5){
        return `Airport is full. Cannot land ${plane}`
      } else {
      this.airport.push(plane)
      return this.airport 
    }
  }

  takeOff(plane){
      if (!this.airport.includes(this.plane)){
        return `${plane} has already taken off`
      } else {
      let index = this.airport.indexOf(plane);
      this.airport.splice(index, 1);
      console.log(`${plane} has left the airport`);
      return this.airport 
    }
  }

  override(newCapacity){
    this.capacity = newCapacity
    return this.capacity
  }
}

module.exports = Airport
