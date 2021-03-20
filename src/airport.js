class Airport {
  constructor(name){
    this.airportname = name;
    this.planeList = [];
    this.airportCapacity = 1
  }

  landPlane(Plane){
    if(this.planeList.length == this.airportCapacity){
      return `${this.airportname} is full - ${Plane.planename} cannot land`
    }
    else{
    this.planeList.push(Plane.planename)
    Plane.isPlaneLanded = true
    return `${Plane.planename} has landed at ${this.airportname}`
    }
  }

  changeCapacity(number){
    this.airportCapacity = number
  }

}

module.exports = Airport;
