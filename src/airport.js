class Airport {
  // here's a starting point for you

 planesAtAirport = []; 
 #capacity

 constructor(capacity = 5) {
   this.#capacity = capacity;
  }

  getCapacity() {
    return this.#capacity;
  }

  setCapacity(newCapacity) { 
   this.#capacity = newCapacity;
  }
  

 landPlane(plane) {
 this.planesAtAirport.push(plane);
 console.log(`planesAtAirport length: ${this.planesAtAirport.length}`);
 console.log(this.planesAtAirport);

 return `confirming that ${plane} has landed`;


  }

}

module.exports = Airport;
