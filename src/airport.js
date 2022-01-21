const { Plane } = require("./plane");

class Airport {
  // here's a starting point for you
  constructor(capacity = 5) {
    this.planesArray = [];
    this.capacity = capacity;

  }

  //Need to refactor 
  landPlane(plane, weather) {
    try {
      if (!(plane instanceof Object && weather instanceof Object)) throw new Error('Arguments must be objects. Please use the Plane() and Weather() class.');
      if (this.planesArray.includes(plane.getName())) throw new Error('Plane is already at the Airport');
      if (plane.isLanded()) throw new Error('Plane is Landed somewhere else.')
      if (weather.getForecast() === 'Stormy') throw new Error('Stormy weather! Can\'t land the plane.')
      if (!(this.planesArray.length < this.capacity)) throw new Error('Airport is full. Land somewhere else!')
      this.planesArray.push(plane.getName());
      plane.changeLandingStatus()
    }

    catch (err) {
      console.log(err.message)
      return err
    }

  }


  takeOffPlane(plane, weather) {


    try {
      if (!(plane instanceof Object && weather instanceof Object)) throw new Error('Please use the Plane and Weather classes.');
      if (!this.planesArray.includes(plane.getName())) throw new Error('Plane is not at this Airport.');
      if (weather.getForecast() === 'Stormy') throw new Error('Stormy weather! Plane Can\'t take off.');
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



//To do: Create test so nonObjects weathers cant be inputted

