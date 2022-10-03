class Airport {

  airportList;
  airportCapacity;

  constructor() {
    this.airportList = [];
    this.airportCapacity = 5;
  };

  land(plane) {
    this.airportList.push(plane);
  };

  capacity(size) {
    if (size === undefined) {
      return this.airportCapacity;
    } else {
      this.airportCapacity = size;
    };
  };

  fullCapacity() {
    this.airportList.push(`plane`, `plane`, `plane`, `plane`, `plane`);
  }
};



module.exports = Airport;
