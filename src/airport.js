class Airport {
  // here's a starting point for you
  airportHangar = [];
  hangarCapacity = 2;

  add = (plane) => {
    if (this.airportHangar.length < this.hangarCapacity) {
      this.airportHangar.push(plane);
    } else {
      return `Airport is full. Plane cannot land.`
    }
  };

  increaseHangarCapacity = (xtracap) => {
    this.hangarCapacity += xtracap;
  }

  remove = (plane) => {
    if (this.airportHangar.includes(plane)) {
      let index = this.airportHangar.indexOf(plane);
      this.airportHangar.splice(index, 1);
      return `Plane has departed airport.`
    } else {
      return `Plane is not in hangar`
    }
  }
};


module.exports = Airport;
