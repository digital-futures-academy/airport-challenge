class Airport {
  // here's a starting point for you
  constructor(capacity = 5) {
    this.planesArray = [];
    this.capacity = capacity;

  }

  //Need to refactor 
  landPlane(plane) {

    if (this.planesArray.length < this.capacity) {
      this.planesArray.push(plane.getName());
    } else {
      return new Error('Airport is full. Land somewhere else!');
    }

  }






}



module.exports = Airport;



//to do:
//stop plane from landing if airport full (done)
//Create a plane class and decouple (properties name and landed (boolean)) (doing)
//then let plane takeoff
// refactor so already landed planes don't land again and already takeoff'd planes done takeoff again