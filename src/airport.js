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

  takeOffPlane(Plane){
    if (this.planeList.includes(Plane.planename)){
      for(let i = 0; i < this.planeList.length; i++){ 
        if ( this.planeList[i] === Plane.planename) { 
            this.planeList.splice(i, 1); 
        }
    }
    Plane.isPlaneLanded = false
    return `${Plane.planename} has taken off from ${this.airportname}`
    }
  }

  changeCapacity(number){
    this.airportCapacity = number
  }

}

module.exports = Airport;
