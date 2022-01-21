class Airport {
  // here's a starting point for you
  constructor(name, capacity, weather) {
    this.terminal = [];
    this.name = name;
    this.capacity = capacity;

  }

  land(plane) {
    if (this.terminal.length < this.capacity) {
      this.terminal.push(plane);
    } else {
      return 'Error: Airport is full'
    }
  }

  capacityEditor(input) {
    this.capacity = input;
  }

  takeOff(plane) {
    for (let i = 0; i < this.terminal.length; i++) {
      if (this.terminal[i] === plane) {
        this.terminal.splice(i, 1)
      }
    }
  };

  planeTracker() {
    if (this.terminal.includes(input)) {
      return 'plane is already here';
    } else {
      return 'plane is not here';
    }
  }

  stopPlanesTakingOff(weather) {
    if (this.takeOff && weather === 'stormy') {
      return 'error: weather is bad, planes cannot takeoff'
    }
  };
}




const airportOne = new Airport('MAN', 5);

class Weather {
  constructor(weatherOptions, weather) {
    this.weatherOptions = ['stormy', 'clear', 'raining', 'sunny']
    this.weather = weather;
  }

  weatherChecker(weatherNumber) {
    this.weather = this.weatherOptions[weatherNumber]
    //let randomWeather = this.weatherOptions[Math.floor(Math.random() * this.weatherOptions.length)];
    //this.weather = randomWeather;
    if (this.weather === 'stormy') {
      return 'error: weather is bad, planes cannot takeoff';
    } return 'Weather is okay';
  }
}


module.exports = { Airport, Weather }
