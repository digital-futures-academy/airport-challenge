const Plane = require(`../src/Plane`);
const weather = ["stormy", "sunny"];
class Airport {
  // here's a starting point for you
  airportPlanes = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  fullCapacity = (full) => {
    this.capacity += full;
  };

  raisingCapacity = (newCapacity) => {
    this.capacity = newCapacity;
  };

  takingOff = (idPlane) => {
    let planeIndex = this.airportPlanes.findIndex(
      (plane) => idPlane === plane.id
    );
    planeIndex === -1
      ? console.log(`The plane is not in the airport`)
      : this.airportPlanes.splice(planeIndex, 1),
      console.log(`the Plane took off`);
  };
  checkPlane = (plane) => this.airportPlanes.includes(plane);

  checkWeather = () => {
    let currentWeather = weather[(Math.random() * weather.length) | 0];
    if (currentWeather === "stormy") {
      console.log("Weather is stormy, cannot take off or land");
      return false;
    }
    return true;
  };
}

module.exports = Airport;
