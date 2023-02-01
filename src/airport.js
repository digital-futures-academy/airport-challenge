const Plane = require('./src/plane');

class Airport {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.conditions = ['sunny', 'stormy'];
    this.currentWeather = undefined;
    this.planes = [];
  }
  get allPlanes() {
    return this.planes;
  }

  //Generates a random Weather bases on the available conditions
  checkWeather() {
    this.currentWeather = this.conditions[Math.floor(Math.random() * this.conditions.length)];
  }
  //Overriding airport capacity
  changeCapacity(capacity) {
    this.capacity = capacity;
  }

  //Attempts to land a plane
  landPlane(plane) {
    console.log(`Plane ${plane.name} with id: ${plane.id} is attempting to land...`);
    // Checking if plane is at the airport
    const isPlaneTheAirport = this.planes.find((el) => el.id === plane.id);
    if (isPlaneTheAirport) {
      console.log(isPlaneTheAirport.id);
      console.error('This Plane has already landed at the airport');
      return;
    } else
      this.checkWeather();
    //Checking weather
    if (this.currentWeather === 'stormy') {
      console.error('Cannot land plane, weather is stormy.');
      return;
    }
    //Checking airport capacity
    if (this.planes.length >= this.capacity) {
      console.error('Airport is full, cannot land a plane.');
      return;
    }

    // Landing a plane
    plane.status = 'landed';
    this.planes.push(plane);
    console.log(`The Weather was good, plane: ${plane.name} with id: ${plane.id} has landed at the airport.`);
  }

  //Attempts to take off the plane
  takeOffPlane(plane) {
    console.log(`Plane ${plane.name} with id: ${plane.id} is attempting to takeoff...`);
    // Checking if any planes are at the airport
    if (!this.planes.includes(plane)) {
      console.error(`Plane ${plane.name} with id: ${plane.id} is not at the airport, cannot take off.`);
    } else {
      // Checking weather
      this.checkWeather();
      if (this.currentWeather === 'stormy') {
        console.error(`Plane ${plane.name} with id: ${plane.id} cannot takeoff due to stormy weather.`);
      } else {
        // Checking if plane is in the planes array
        this.planes = this.planes.filter(function (el) {
          return el.id !== plane.id;
        });
        console.log(`Plane ${plane.name} with id: ${plane.id} has already taken off.`);
      }
    }
  }
}

module.exports = Airport;
