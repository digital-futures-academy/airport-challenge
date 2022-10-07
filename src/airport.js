class Airport {
  planesAtAirstrip = [];
  capacity;

  constructor(capacity = 3) {
    this.capacity = capacity;

  }


  landplane = (plane) => {
    this.planesAtAirstrip.push(plane)
    return 'Plane has successfully landed at the airstrip'

  }

  changeCapacity = (number) => {
    this.capacity = number
  }

}

module.exports = Airport;
