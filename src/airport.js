const Plane = require('./plane')

class Airport {

  slotsOccupied = [];

  addPlane = tailNumber => {
    if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
  };

}

console.log(Airport.slotsOccupied)


module.exports = Airport;
