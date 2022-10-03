class Airport {

  constructor(capacity = 3) {
    this.airportPlanes = [];
    this.capacity = capacity;
  };

  land(planeId) {
    let plane = planeId;
    console.log(`******* ${plane} WAS LANDED.*******`);
    this.airportPlanes.push(planeId);
    return 1
  };


};

module.exports = Airport;
