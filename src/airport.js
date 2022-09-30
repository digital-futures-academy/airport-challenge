class Airport {
  // here's a starting point for you
  airportHangar = [];
  hangarCapacity = 2;

  add = plane => {
    //if (this.airportHangar.length <= this.hangarCapacity) {
    this.airportHangar.push(plane);
    //} else {
    //  return "Airport is full."
    //}
  };

  increaseHangarCapacity = (xtracap) => {
    this.hangarCapacity += xtracap;
  }
};



module.exports = Airport;
