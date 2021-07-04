class Airport {
  // here's a starting point for you

  constructor() { 
    this.airport = []
  }
//1 Land plane
  land(plane){
    this.airport.push(plane)
    //plane lands at airport
    return this.plane
  }

  //2 Expand default capacity
 
  if (this.airport.length) === this.max {
    console.log('Default capacity expanded')
  }
  else (this.airport.push(plane)) {
    console.log("land plane");
  }

//3 Airport full
add(plane); 
  if (this.airport.length === this.max) {
      console.log("Airport full");

  }
  else this.airport.push(plane);
    console.log("land plane");



//4 Plane take off & no longer at airport
remove(plane); 
  for (let i = 0; i < this.airport.length; i++) {
      if (this.plane[i] === plane) this.plane.splice(i, 1);
  } 
//5 prevention
    

}
//this.max = 5;
this.airport = [];

module.exports = Airport;
