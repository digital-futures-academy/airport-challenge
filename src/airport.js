class Airport {

  constructor(maxCapacity=5) {
    this.airplaneArr = [];
    this.maxCapacity = maxCapacity;
  }

  checkIfFull() {
    if (this.airplaneArr.length === this.maxCapacity) {
      return true
    } else {
      return false
    }
  }

checkIfAtAirport(airplane) {
  if (this.airplaneArr.includes(airplane)) {
    return true
  } else {
    return false
  }
}

  land(airplane, WeatherClass, currentweather) {
    const weatherToday = new WeatherClass()
    if (this.checkIfFull()) {
      return 'airport at full capacity'
    } else if (this.airplaneArr.includes(airplane)) {
        return 'airplane already at airport'
      } else if (airplane.status) {
        return 'this plane has already landed'
      } else if (weatherToday.checkIfStormy(currentweather) === 'stormy') {
        return 'weather too stormy to land'
      } else {
          this.airplaneArr.push(airplane)
          airplane.land()
          return 'landed'
        }
      }

  takeoff(airplane, WeatherClass, currentweather) {
    const weatherToday = new WeatherClass()
    if (weatherToday.checkIfStormy(currentweather) === 'stormy') {
      return 'weather too stormy to takeoff'
    } else if (this.airplaneArr.includes(airplane) === false) {
      return 'airplane not at airport'
      } else if (airplane.status === false) {
        return 'this plane has already taken off'
      } else {
        const index = this.airplaneArr.indexOf(airplane)
        this.airplaneArr.splice(
index,
1
)
        airplane.takeoff()
        return 'plane taken off'
    }
  }
}

module.exports = Airport;
