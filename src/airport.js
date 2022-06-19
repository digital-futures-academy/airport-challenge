class Airport {

  #capacity = 5;

  constructor() {
    this.planeList = [];
  }

  addLandingPlane(planeObject) {
    if (this.isPlaneInAirport(planeObject)) {
      console.log(`Plane is already at airport`)
    } else {
      this.isAirportFull() ? console.log('Airport is full') : this.planeList.push(planeObject);
    }
  } 

    isAirportFull() {
      return (this.#capacity <= this.planeList.length) ? true : false;
    }

    isPlaneInAirport(planeName) {
      for (let i = 0; i < this.planeList.length; i++) {
        if (this.planeList[i] === planeName) {
          return true;
        }
      } return false;
    }
    
    takeOffPlane(planeName) {
      this.isPlaneInAirport(planeName);

      this.isPlaneInAirport(planeName) ? this.planeList.splice(planeName) && console.log('Plane has taken off') : console.log('Plane is not in airport')
      }
  
  get getCapacity() {
      return this.#capacity;
    }

  set changeAirportCapacity(capacityNum) {
      this.#capacity = capacityNum;
      return this.#capacity;
    }
  
  } 


module.exports = {
  Airport
};
