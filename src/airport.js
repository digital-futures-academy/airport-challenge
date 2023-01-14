const Plane = require('./plane')

class Airport {

  slotsOccupied = [];

  slotsAvailable = this.slotsOccupied.length = 10;

  addPlane = tailNumber => {
    if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
  };

}

module.exports = Airport;
