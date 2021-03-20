class Airport {
    constructor(plane){
        this.plane = plane
        this.airport = []
        this.capacity = 5
      }

  override(newCapacity){
      this.capacity = newCapacity
        return this.capacity
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
      let index = this.airport.indexOf(this.plane);
      this.airport.splice(index, 1);
      console.log(`${plane} has left the airport`);
      return this.airport 
    }
  }
}

// let airport = new Airport()

// let result = airport.land('plane 0') && airport.land('plane 1') && airport.land('plane 2') && airport.land('plane 3')
// console.log(result)


module.exports = Airport
