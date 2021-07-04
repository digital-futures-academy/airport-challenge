const checkWeather = require('./checkWeather.js')

class Aiport {
  constructor (capacity = 30) {
    this.capacity = capacity
    this.hangar = []
  }

  instructLand (plane) {
    if (!plane.inAir) {
      return 'Plane already in airport'
    }
    else if (this.hangar.length >= this.capacity) {
      return 'Airport at full capacity'
    } 
    else {
      if (checkWeather() === 'stormy') {
        return 'Weather does not permit'
       }
      else {
        plane.land()
        this.hangar.push(plane.name)
      } 
    }
  }

  instructTakeOff (plane) {
    if (plane.inAir) {
      return 'Plane already in air'
    }
    else {
      return (checkWeather() === 'stormy') ? 'Weather does not permit' : plane.takeOff();
    }
  }
}

module.exports = Aiport;