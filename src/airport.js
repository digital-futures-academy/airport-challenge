class Airport {

  constructor() {
    this.airportPlanes = [];
  };

  land(planeId) {
    let plane = planeId;
    console.log(`******* ${plane} WAS LANDED.*******`);
    this.airportPlanes.push(planeId);
    return 1
  };


};

module.exports = Airport;
