class Airport {

  #airportList;
  #capacity
  #weather

  constructor(capacity = 10, weather = this.randomWeather()) {
    this.#airportList = []
    this.#capacity = capacity
    this.#weather = weather.toLowerCase()

  }

  get weather() {
    return this.#weather
  }
  set weather(weather) {
    this.#weather = weather
  }

  randomWeather() {
    let weather = Math.floor(Math.random() * 30)
    if (weather === 1) {
      return 'stormy'
    }
    return 'sunny'
  }

  get airportList() {
    return this.#airportList
  }


  get capacity() {
    return this.#capacity
  }

  isFull = () => this.#capacity === this.#airportList.length

  isStormy = () => this.#weather === 'stormy'

  land(plane) {
    if (plane.landed) {
      return new Error(`${plane.name} has already landed`)
    }
    if (this.isFull()) {
      return new Error('Airport capacity is full')
    }
    if (this.isStormy()) {
      return new Error(`Weather is stormy`)
    }

    this.#airportList = [...this.#airportList, plane]
    plane.landed = true

  }

  changeCapacity(num) {
    this.#capacity = num
  }



  takeOff(plane) {
    if (!this.isPlaneInAirport(plane)) {
      return new Error(`${plane.name} is not in the Airport`)
    }
    if (this.isStormy()) {
      return new Error(`Weather is stormy`)
    }
    const index = this.#airportList.findIndex(i => i === plane)
    this.#airportList.splice(index, 1)
    plane.landed = false
    return `${plane.name} has taken off`
  }

  isPlaneInAirport(plane) {
    if (this.#airportList.includes(plane)) {
      return true
    }
    return false
  }

}

module.exports = Airport;

