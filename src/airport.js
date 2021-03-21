class Airport {
  constructor(name){
    this.airportname = name;
    this.planeList = [];
    this.airportCapacity = 1
  }

  landPlane(Plane){
    if(Plane.planeIsLandedHere !== 'Nowhere'){
      return `Cannot land ${Plane.planename} as already landed at ${Plane.planeIsLandedHere}`
    }
    if(this.planeList.length == this.airportCapacity){
      return `${this.airportname} is full - ${Plane.planename} cannot land`
    }
    else{
    this.planeList.push(Plane.planename)
    Plane.isPlaneLanded = true
    Plane.planeIsLandedHere = this.airportname
    return `${Plane.planename} has landed at ${this.airportname}`
    }
  }

  takeOffPlane(Plane){
    if (Plane.planeIsLandedHere === this.airportname){
      for(let i = 0; i < this.planeList.length; i++){ 
        if ( this.planeList[i] === Plane.planename) { 
            this.planeList.splice(i, 1); 
        }
    }
    Plane.isPlaneLanded = false
    Plane.planeIsLandedHere = 'Nowhere'
    return `${Plane.planename} has taken off from ${this.airportname}`
    }
    else{
      return `${Plane.planename} is not landed at ${this.airportname}`
    }
  }

  changeCapacity(number){
    this.airportCapacity = number
  }

}

module.exports = Airport;
