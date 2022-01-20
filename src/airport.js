const { Plane } = require("./plane");

class Airport {
  // here's a starting point for you
  constructor(capacity = 5) {
    this.planesArray = [];
    this.capacity = capacity;

  }

  //Need to refactor 
  landPlane(plane) {
    try {
      if (!(plane instanceof Object)) throw new Error('Plane must be an object. Please use the Plane() class.')
      if (this.planesArray.includes(plane.getName())) throw new Error('Plane is already at the Airport');
      if (plane.isLanded()) throw new Error('Plane is Landed somewhere else.')
      if (!(this.planesArray.length < this.capacity)) throw new Error('Airport is full. Land somewhere else!')
      this.planesArray.push(plane.getName());
      plane.changeLandingStatus()
    }

    catch (err) {
      console.log(err.message)
      return err
    }

  }


  takeOffPlane(plane) {


    try {
      if (!(plane instanceof Object)) throw new Error('Please use the Plane class.');
      if (!this.planesArray.includes(plane.getName())) throw new Error('Plane is not at this Airport.')
      this.planesArray = this.planesArray.filter(landedPlane => landedPlane != plane.getName());
      plane.changeLandingStatus();
    }
    catch (err) {
      console.log(err.message)
      return err;
    }



  }




}



module.exports = Airport;



//To do: All user cases done just need to do the Extended criteria