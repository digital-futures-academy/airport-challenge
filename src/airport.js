class Airport {

  constructor(conditions, capacity = 3,) {
    this.airportPlanes = [];
    this.capacity = capacity;
    this.conditions = conditions;
  };

  land(plane) {

    if (this.conditions === "calm") {
      if (this.airportPlanes.includes(plane) === true) {
        console.log(`OOPS, not possible ${plane} is already in the airport!`);
      }
      else {
        console.log(`   **** ${plane} LANDED SAFELY.****`);
        this.airportPlanes.push(plane);
        return true;
      };
    }
    else {
      console.log("ALERT: cannot land due to stormy weather!");
      return false;
    }
  }

  takeOff(plane) {
    if (this.conditions === "calm") {
      if (this.airportPlanes.includes(plane) === true) {
        this.airportPlanes = this.airportPlanes.filter(value => !plane.includes(value));
        console.log(`   **** ${plane} TOOK OFF!! ****`);
        console.log("Airport contains: " + this.airportPlanes.length + " plane(s): " + this.airportPlanes.join(", "));
        return true;
      }
      else {
        console.log(`OOPS, not possible ${plane} is not in the airport!`);
      }
    }
    else {
      console.log("ALERT: plane cannot take off due to stormy weather!");
      return false;
    }
  };

  checkFull() {
    console.log("Airport contains: " + this.airport + this.airportPlanes.join(", "));
    if (this.airportPlanes.length === this.capacity) {
      return true
    }

  };

  trackPlanes() {
    return "Airport contains: " + this.airportPlanes.length + " plane(s): " + this.airportPlanes.join(", ");
  };

};

module.exports = Airport;
