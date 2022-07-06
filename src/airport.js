class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity = 5;

  isPlaneAtAirport(plane) {
    this.planesAtAirport.includes(plane);
    return true
  }

  isPlaneAtAirport(plane) {
    this.planesAtAirport.pop(plane);
    return false
  }


  landPlane(plane) {
    this.planesAtAirport.push(plane);
    return "airport is full, plane cannot land";
  }

  takeoffPlane(plane) {
    this.planesAtAirport.pop(plane);
    return "plane has left the airport";
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

