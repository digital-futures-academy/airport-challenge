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

  takeOff(plane){
    if (this.isThere(plane)){
    let index = this.plane.indexOf(plane);
    this.plane.splice(index, 1);
     if (this.isThere(plane)){
       return 0;
     }
     else console.log(`${plane} is no longer in the airport`) 
    }
    else
    console.log('Sorry this plane is not in the airport.')
  }

  isFull(){
    // console.log(this.capacity.length)
    return this.plane.length >= this.capacity
  }

  isThere(plane){
    return this.plane.includes(plane)
  }
}

module.exports = Airport;
