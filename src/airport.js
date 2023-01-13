class Airport {

  slotsOccupied = [];

  addPlane = tailNumber => {
    if (tailNumber instanceof plane) this.occupiedSlots.push(tailNumber)
  };

}

module.exports = Airport;
