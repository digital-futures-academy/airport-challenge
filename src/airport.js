import Weather from "/Users/oonaghparker/Desktop/debug/airport-challenge/src/weather.js"

let weather = new Weather();

class Airport {
  landedPlanes = [];

  constructor(capacity = 1) {
    this.capacity = capacity
  }

  landPlane = plane => {
    this.landedPlanes.push(plane);
  };

  airportCapacity = (capacity) => {
    return this.capacity = capacity;
  };

  isAirportFull = () => {
    return (this.landedPlanes.length >= this.capacity)
  };

  planeTakeoff = plane => {
    for (let i of this.landedPlanes) {
      if (plane.id === i.id) {
        this.landedPlanes.splice(i);
      }
    }
  };

  isPlaneAlreadyInAirport = plane => {
    for (let i of this.landedPlanes) {
      if (plane === i.id) {
        return true;
      }
    }
    return false;
  };

  weatherCheck = () => {
    if (weather.getWeather() === 'stormy') {
      //console.log(`Getweather ${weather.getWeather()}`)
      return false
    }
    else {
      return true
    }
  };

};

export default Airport;
