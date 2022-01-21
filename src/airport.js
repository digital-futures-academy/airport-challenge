class Airport {

  constructor(position, weather, destination, location, capacity) {
    this.planeFlightStatus = position;
    this.weatherCondition = weather;
    this.flightDestination = destination;
    this.planeLocation = location;
    this.maximumCapacity = capacity;
    this.hanger = []
  }

  planePosition() {
    return this.planeFlightStatus;
  }

  airportCapacity() {
    return this.maximumCapacity;
  }


  landingPlaneIfAirportFull() {
    if (this.hanger.length < airportCapacity) {
      return 'Space available, land here'
    } else {
      return 'Hanger full, cannot land'
    }
  }

}



//if Airport.currentCapacity <= airportCapacity



/*As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
*/


module.exports = Airport;
