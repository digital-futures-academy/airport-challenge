class Airport {

  constructor(position, weather, destination, location, capacity) {
    this.planeFlightStatus = position;
    this.weatherCondition = weather;
    this.flightDestination = destination;
    this.planeLocation = location;
    this.maximumCapacity = capacity;

  }

}

const airportOne = new Airport(True, 0, 0, 0, 0)


/*As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
*/


module.exports = Airport;
