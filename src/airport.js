class Airport {
  planesAtAirstrip = [];
  capacity;

  constructor(capacity = 3) {
    this.capacity = capacity;

  }


  landplane = (plane) => {
    if (this.planesAtAirstrip.length >= this.capacity) {
      return 'Im Sorry you can not land here, the airstrip is full'

    } else if (this.isPlaneAtAirport(plane) === false) {

      this.planesAtAirstrip.push(plane)
      return 'Plane has successfully landed at the airstrip'

    }
    else return 'PLane is already at the airport'



  }

  changeCapacity = (number) => {
    this.capacity = number
  }


  planeTakesOff = (plane) => {

    if (this.isPlaneAtAirport(plane) === true) {
      let currentPlanes = this.planesAtAirstrip.filter(item => item !== plane)
      this.planesAtAirstrip = currentPlanes
      return 'Plane has succesfully taken off and left the airstrip'
    }



  }


  isPlaneAtAirport = (plane) => {
    return this.planesAtAirstrip.includes(plane)

  }










}

module.exports = Airport;
