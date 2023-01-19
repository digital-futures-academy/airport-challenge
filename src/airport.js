const Plane = require('./Plane');

class Airport {
  airportPlanes = [];

  constructor(airportCapacity = 5) {
    this.airportCapacity = airportCapacity;
  }

  isAirportFull() {
    return (this.airportPlanes.length >= this.airportCapacity) ? true : false

  }

  landPlane(plane) {
    if (plane instanceof Plane && this.isAirportFull() == false) {
      return this.airportPlanes.push(plane)
    }

    else { console.log('Airport is full and plane cannot land') }
  }


  takeOff(plane) {

    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlanes => airportPlanes.id === plane.id);
    //console.log(indexOfPlaneInAirportPlanes)

    if (indexOfPlaneInAirportPlanes > -1) this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1)
    return console.log('Plane has taken off from airport');
    //   // console.log('The plane has taken off')

  }
}







module.exports = Airport;
