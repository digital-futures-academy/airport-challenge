class Airport {
  airportList = [];
  planeObject;
  airportFull;
  planeObjIndex;
  isPlaneThere;



  constructor(airportSize = 4, airportName = `Default airport`) {
    this.airportSize = airportSize;;
    this.airportName = airportName;
  }

  landPlane(planeObject) {
    this.isAirportFull();
    this.isPlaneAtAirport(planeObject);
    this.planeObject = planeObject;
    if (this.isAirportFull === true && this.isPlaneThere === true) {
      console.log(`${planeObject.planeName} can't land at ${this.airportName} because it's full and plane already there.`);
    } else if (this.isPlaneThere === true) {
      console.log(`${this.planeObject.planeName} is already at ${this.airportName} so can't land.`);
    } else {
      this.airportList.push(planeObject);
      console.log(`${planeObject.planeName} has just landed at ${this.airportName}.`);
    }

  }

  planeTakeoff(planeObject) {
    this.planeObject = planeObject;
    this.isPlaneAtAirport(planeObject);
    if (this.isPlaneThere === true) {
      console.log(`${this.planeObject.planeName}} is at ${this.airportName} so will take off now.`);
    } else if (this.isPlaneThere === false) {
      console.log(`${this.planeObject.planeName} is not at ${this.airportName} so can't take off.`);
    }
  }


  isAirportFull() {
    if (this.airportList.length === this.airportSize) {
      this.airportFull = true;
    } else {
      this.airportFull = false;
    }

  }

  isPlaneAtAirport(planeObject) {
    this.planeObject = planeObject;
    for (let planeElement of this.airportList) {
      const planeObjIndex = this.airportList.indexOf(planeElement);
      for (const planeProperty in planeElement) {
        if (planeElement[planeProperty] == planeObject.planeName) {
          if (planeObjIndex !== -1) {
            this.airportList.splice(planeObjIndex, 1);
            console.log(this.airportList);
          }
          return this.isPlaneThere = true;
        } else {
          return this.isPlaneThere = false;
        }
      }
    }
  }

}

module.exports = Airport;
