const SystemDesigner = require('../src/systemDesigner');
const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

class Airport {
  constructor() {
      this.landingArea = [];
      this.capacity = 5;
  }
  land(plane, weather){
    if(weather.conditions() === 'stormy') {
      return 'Cannot land in stormy weather';
    }
    else if(plane.status === 'landed') { 
      return "Can't land a plane that's already landed";
    } 
    else{
        if(this.landingArea.length < this.capacity) {
          this.landingArea.push(plane);
          plane.status = 'landed';
          return this.landingArea;
        } else {
          return "Sorry this airport is full you can't land here";
      }
    }  
  }

  takeOff(plane, weather){
    if(weather.conditions() === 'stormy') {
      return 'Cannot take off in stormy weather';
    }
    else if(plane.status === 'takenOff'){
      return "Can't let a plane take off that's already taken off";
    } 
    else {
        this.landingArea.splice(this.landingArea.indexOf(plane), 1);
        plane.status = 'takenOff';
        return this.landingArea;
    }
  }  
}

module.exports = Airport;
