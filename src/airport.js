
class Airport {

  constructor(numOfPlanes = [],planeID, airport, planeStatus, planesInAirport) {
    this.numOfPlanes = numOfPlanes;
    this.airportCapacity = 3;
    this.planeID = planeID;
    this.airport = airport;
    this.planeStatus = planeStatus;
    this.planesInAirport = planesInAirport;
    
  }

  planeCanLand(newPlane) {
    this.numOfPlanes.push(newPlane);
  }

  
  increaseCapacity() {
    this.numOfPlanes >= this.airportCapacity;
  }




  isAirportFull() {
    for (let i = 0; i < this.numOfPlanes.length; i++){
      this.airportCapacity = 3;
      if (this.numOfPlanes >= this.airportCapacity) {
        console.log('Airport is full');
        
      }
      //return this.numOfPlanes[i];
    }
  
  }


  isPlaneInAirport(planeID) {
    planeID.pop();
    console.log(planeID);
  }
  

  whereIsPlane(planeID) {
    this.planesInAirport = [];

    for (let i = 0; i < this.planesInAirport.length; i++){
      for (let j = 0; j < this.planeID.length; j++);
      if (this.planesInAirport === planeID) {
        console.log('Plane has already landed');
      } else {
        console.log('Plane is not in airport');
      }
    }
    
  }

}

module.exports = Airport;