class Airport {

  constructor(capacity = 3) {
    this.airportPlanes = [];
    this.capacity = capacity;
    //this.weather = weather;
  };

  checkWeather() {
    let weather;
    weather = Math.floor(Math.random() * 2) + 1;
    if (weather === 1) {
      return "stormy"
      //console.log(conditions);
    }
    else {
      return "calm";
      // console.log(conditions);
    };

  };

  land(plane) {
    if (this.airportPlanes.includes(plane) === true) {
      console.log(`OOPS, not possible ${plane} is already in the airport!`);
    }
    else {
      console.log(`   **** ${plane} LANDED SAFELY.****`);
      this.airportPlanes.push(plane);
      return true;
    };

  };

  takeOff(plane) {
    if (this.airportPlanes.includes(plane) === true) {
      this.airportPlanes = this.airportPlanes.filter(value => !plane.includes(value));
      console.log(`   **** ${plane} TOOK OFF!! ****`);
      console.log("Airport contains: " + this.airportPlanes.join(", "));
      return true;
    }
    else {
      console.log(`OOPS, not possible ${plane} is not in the airport!`);
    }

  };

  checkFull() {
    if (this.airportPlanes.length === this.capacity) {
      console.log("Airport contains: " + this.airportPlanes.join(", "));
      return true
    }

  };

};

module.exports = Airport;
