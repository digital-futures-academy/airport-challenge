class Airport {
  constructor(capacity = 3) {
    this.capacity = capacity;
    this.conditions = ['sunny', 'stormy'];
    this.currentWeather = undefined;
    this.planes = [];
  }

}

module.exports = Airport;
