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

  fullCapacity() {
    this.airportCapacity = 5;
    this.airportList.push(`plane`, `plane`, `plane`, `plane`, `plane`);
  }
};



module.exports = Airport;
