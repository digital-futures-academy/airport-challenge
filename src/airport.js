class Airport {

  airportList;
  airportCapacity;

  constructor() {
    this.airportList = [];
    this.airportCapacity = undefined;
  };

  land(plane) {
    this.airportList.push(plane);
  };

  capacity(size) {
    if (size === undefined) {
      this.airportCapacity = 5;
    } else {
      this.airportCapacity = size;
    };
  };
};



module.exports = Airport;
