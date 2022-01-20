class Airport {

  constructor(position, weather, destination, location, capacity = 20) {
    this.planeFlightStatus = position;
    this.weatherCondition = weather;
    this.flightDestination = destination;
    this.planeLocation = location;
    this.maximumCapacity = capacity;

  }

  planePosition() {
    return this.planeFlightStatus;
  }

  airportCapacity() {
    return this.maximumCapacity;
  }

}





/*As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
*/


module.exports = Airport;
