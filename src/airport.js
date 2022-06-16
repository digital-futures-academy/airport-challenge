class Airport {

  #airportList;
  #capacity

  constructor(capacity = 0) {
    this.#airportList = []
    this.#capacity = capacity
  }

  get airportList() {
    return this.#airportList
  }


  get capacity() {
    return this.#capacity
  }

  land(plane) {
    if (this.isFull()) {
      return new Error('Airport capacity is full')
    } else {
      this.#airportList = [...this.#airportList, plane]
    }


  }

  changeCapacity(num) {
    this.#capacity = num
  }

  isFull = () => {
    if (this.#capacity === this.#airportList.length) {
      return true
    }
    return false
  }

}

module.exports = Airport;

