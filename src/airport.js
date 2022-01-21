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
    if (this.hanger.length < this.airportCapacity()) {
      return 'Space available, land here'
    } else {
      return 'Hanger full, cannot land'
    }
  }

  plane() {
    this.hanger = ['plane']
  }

  planeRemover() {
    if (this.hanger.includes(['plane']))
      this.hanger.filter('plane')
    return 'Plane has left the airport'
  }

  planeTakeOffLocationRestrictions(plane) {
    if (this.hanger.includes(plane)) {
      return true //it is at the hanger
    }
    return false // it is not at the hanger 
  }


  takeOffErrors(plane) {
    if (this.planeTakeOffLocationRestrictions(plane)) {
      console.log('Plane not in hanger - cannot authorise plane launch')
      return true
    }
    return false
  }



  weatherMonitor() {
    let weatherCondition = (Math.random(0 - 1))
    if (weatherCondition < 0.1) {
      return true //stormy
    } else {
      (weatherCondition > 0.1)
      return false //sunny
    }

  }

  planeTakeOffAuthorisation() {
    if (this.weatherMonitor(true)) {
      return 'Sunny weather, take-off authorised'
    } else {
      return 'Stormy weather, take-off not authorised'
    }
  }

  planeLandingAuthorisatoin() {
    if (this.weatherMonitor(true)) {
      return 'Plane may land'
    } else {
      return 'Stormy conditions, plane may not land'
    }
  }





}



module.exports = Airport;