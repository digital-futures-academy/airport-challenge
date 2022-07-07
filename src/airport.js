class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity = 5;

  isPlaneAtAirport(plane) {
    return this.planesAtAirport.includes(plane);
  
  }



  landPlane(plane) {
    this.planesAtAirport.push(plane);
    return "airport is full, plane cannot land";
  }

  takeoffPlane(plane) {
    if (this.isPlaneAtAirport(plane)) {
      this.planesAtAirport.pop(plane); 
      return "plane has taken off"
      
   }

  }

//https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/
  
  isAirportFull = capacity => {
    if (planesAtAirport.length >= capacity)
      return landPlane(testPlane)
    else testAirport.landPlane(testPlane)
    actualResult = testAirport.planesAtAirport.length;
    return console.log(isAirportFull = true)
  };

}

module.exports = Airport;

