class Airport {
    constructor(plane){
        this.plane = plane
        this.airport = []
        this.capacity = 5
      }

  override(newCapacity){
      this.capacity = newCapacity
        return this.capacity && `This airport's capacity is ${newCapacity}`
      }    

  land(plane){
      if (this.airport.includes(plane)){
        return `${plane} has already landed`
      } else if (this.airport.length >= this.capacity){
        return `Airport is full. Cannot land ${plane}`
      } else {
      this.airport.push(plane)
      return this.airport 
    }
  }

  takeOff(plane){
      if (!this.airport.includes(plane)){
        return `${plane} has already taken off`
      } else {
      let index = this.airport.indexOf(plane);
      this.airport.splice(index, 1);
      return this.airport && `${plane} has left the airport`
    }
  }
}

module.exports = Airport
