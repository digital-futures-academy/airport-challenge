class Airport {
  planesAtAirstrip = [];
  capacity;

  constructor(capacity = 3) {
    this.capacity = capacity;

  }


  landplane = (plane) => {
    if (this.planesAtAirstrip.length >= this.capacity) {
      return 'Im Sorry you can not land here, the airstrip is full'
    }
    this.planesAtAirstrip.push(plane)
    return 'Plane has successfully landed at the airstrip'

  }

  changeCapacity = (number) => {
    this.capacity = number
  }


  planeTakesOff = () => {
    this.planesAtAirstrip.pop()
    return 'Plane has succesfully taken off and left the airstrip'

  }


  isPlaneAtAirport = (plane) => {
    return this.planesAtAirstrip.includes(plane)

  }










}

module.exports = Airport;
