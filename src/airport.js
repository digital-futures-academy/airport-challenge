Plane = require('../src/plane')

class Airport {
  constructor(name){
    this.airportname = name;
    this.planeList = []
  }

  landPlane(Plane){
    this.planeList.push(Plane.planename)
    Plane.isPlaneLanded = true
    return `${Plane.planename} has landed at ${this.airportname}`
  }

}

module.exports = Airport;
