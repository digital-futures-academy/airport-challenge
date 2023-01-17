class Airport {
  planesAtAirport = []
  planeLands = (planeID) => {
    this.planesAtAirport.push(planeID)
  };

}

module.exports = Airport;
