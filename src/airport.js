const Plane = require('./Plane');

class Airport {
  airportPlanes = [];

  constructor(airportCapacity = 5) {
    this.airportCapacity = airportCapacity;
  }

  planeAtAirport(plane) {
    return (this.airportPlanes.includes(plane)) ? true : false

  }

  isAirportFull() {
    return (this.airportPlanes.length >= this.airportCapacity) ? true : false

  }

  landPlane(plane) {
    return (!(plane instanceof Plane)) ? console.log('This plane cannot land at this airport')
      : this.isAirportFull() == true ? console.log('Airport is full,cannot land plane')
        : this.planeAtAirport(plane) ? console.log('Plane already at airport')
          : this.airportPlanes.push(plane);

  }

  takeOff(plane) {

    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlanes => airportPlanes.id === plane.id);

    if ((indexOfPlaneInAirportPlanes > -1)) {
      return this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1);
      return 'This plane has taken off.'
    }

    else (this.planeAtAirport(plane) == false); console.log('Plane not found at airport')

  }



}





module.exports = Airport;
