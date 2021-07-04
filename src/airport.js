class Airport {
  constructor(capacity = 3){
    this.plane = [];
    this.capacity = capacity;
  }

  land(plane){
    if(this.isFull() === true){
      console.log('Sorry the airport is full and so this plane cannot land.')
      return 0;
    } 
    else
    this.plane.push(plane);
    // console.log(this.plane);
     return plane;
  }

  isFull(){
    // console.log(this.capacity.length)
    return this.plane.length >= this.capacity
  }
}

module.exports = Airport;
