const Plane = require(`./plane`);
const Weather = require(`./weather`);

class Airport {
  // here's a starting point for you

  apronPlanes = [];

  constructor(apCap = 10) {
    this.apCap = apCap;
  }


  landPlane = (plane, weather) => {
    if (plane instanceof Plane && !this.isApFull() && !this.isPlaneOnApron(plane.returnId()) && weather === `clear`) {
      this.apronPlanes.push(plane)
    }
  }

  takeoffPlane(plane, weather) {
    if (plane instanceof Plane && this.isPlaneOnApron(plane.returnId()) && weather === `clear`) {
      const planeIndex = this.apronPlanes.indexOf(plane);
      if (planeIndex > -1) { // I am not sure but I believe -1 should work in all instances as the planeIndex will be an integer 
        this.apronPlanes.splice(planeIndex, 1);
      }
    }
  }

  setApCap = capacity => {
    this.apCap = capacity;
  }

  returnApCap() {
    return this.apCap;
  }

  isApFull() {
    return this.apronPlanes.length >= this.apCap ? true : false;
  }

  isPlaneOnApron(planeId) {
    for (let i = 0; i < this.apronPlanes.length; i++) {
      if (this.apronPlanes[i].returnId() === planeId) {
        return true;
      }
    } return false;
  }
  // I think there might be a better way to do this than a for loop but I am unsure of what that would be



}

module.exports = Airport;