class Airport {
  // here's a starting point for you
  constructor(capacity = 5) {
    this.planesArray = [];
    this.capacity = capacity;

  }

  landPlane(plane) {

    if (typeof plane === 'string') {
      if (this.planesArray < this.capacity) {

        this.planesArray.push(plane);

      } else {
        return new Error('Airport is full. Land somewhere else!');
      }

    }
    else {
      return new Error('Please input plane name as a string');

    }

  }

}



module.exports = Airport;



//to do:
//stop plane from landing if airport full
//Create a plane class and decouple (properties name and landed (boolean))
//then let plane takeoff
// refactor so already landed planes don't land again and already takeoff'd planes done takeoff again