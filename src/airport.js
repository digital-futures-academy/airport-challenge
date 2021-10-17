class Airport {
  // here's a starting point for you
  constructor(capacity) {
    this.planes = [];
    this.capacity = capacity;
    this.weather = 'sunny';
    Math.random();
  }
  land(plane, weather) {
    if (this.planes.length < this.capacity && weather == 'sunny') {
      this.planes.push(plane);
      console.log('The plane has landed at the airport');
    } else if (weather == 'stormy') {
      console.log('The plane can;t land because the weather is stormy')
    }
    else {
      console.log('The plane can;t land yet because the airport is full');
    }
  }
  takeoff(plane, weather) {
    if (weather == "sunny") {
      delete this.planes[plane];
      console.log('The plane has taken off and is no longer in the airport');
    } else {
      console.log('The plane can;t take off because the weather is stormy')
    }
  }
}
module.exports = Airport;
