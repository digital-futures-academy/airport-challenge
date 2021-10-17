Plane = require('./plane.js')

class Airport {
  constructor(capacity,currentlyLandedPlanes){
    this.capacity = capacity;
    this.currentlyLandedPlanes = currentlyLandedPlanes;
}
  isFull() {return this.currentlyLandedPlanes.length === this.capacity}; 
  howManyPlanesLanded() {return this.currentlyLandedPlanes.length};

  land(plane){
    if (this.currentlyLandedPlanes.includes(plane.id)){
      return 'Plane is already landed!'
    }
    else {
      this.currentlyLandedPlanes.push(plane.id);
      console.log('Plane landed!')
    } 
  };

  takeoff(plane){
    if (this.currentlyLandedPlanes.includes(plane.id)){
      this.currentlyLandedPlanes.splice(this.currentlyLandedPlanes.findIndex(x => x === plane.id),1);
      console.log('Plane took off!')
    else {
      console.log('Plane is not at the airport!')}
  }
}

module.exports = Airport;
