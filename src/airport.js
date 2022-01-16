class Airport {
  // here's a starting point for you
  constructor(capacity = 5) {
    this.planesArray = [];
    this.capacity = capacity;

  }

  landPlane(plane) {

    if (typeof plane === 'string') {
      this.planesArray.push(plane);
    } else if (plane) {
      this.planesArray.push(plane.toString());

    } else {

    }



  }


}



module.exports = Airport;
