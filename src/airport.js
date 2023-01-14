const Plane = require('./plane')

class Airport {

  slotsOccupied = [];

  let slotsAvailable

addPlane = tailNumber => {
  if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
};

}

module.exports = Airport;
