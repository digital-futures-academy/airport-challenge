// Airport Class

const { assertEquals } = require("../testing-frameworks.js");
const Plane = require(`./plane.js`);

class Airport {
  
  //properties of Airport
  groundedPlanes = []; //array for planes in the airport
  airportCapacity = 10; // sets the capacity of the airport to 10

  //functions of airport
  isAirportFull = () => {
    return assertEquals(this.airportCapacity, this.groundedPlanes.length);
  }

  landPlane = plane => {
    if (plane instanceof Plane && this.isAirportFull() === false) {
      this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array if the input is an instance of Plane class
      return console.log(`The airport is not full, ${plane.planeID} has landed. There are ${this.groundedPlanes.length} plane(s) at this airport.`); // show message that the plane has landed
    } else if (plane instanceof Plane && this.isAirportFull() === true) {
      return console.log(`The airport is full, ${plane.planeID} has not landed.`) // show a message that the plane has on landed
    } else {
      return console.log(`Invalid input, please try again`) // message for any invalid inputs put into the system
    }
  }

  changeAirportCapacity = capacity => {
    if (typeof capacity === 'number' && capacity >= 0) this.airportCapacity = capacity; // changes the capacity of the airport only if the input is a number
  }

  getAirportCapacity = () => {
    return this.airportCapacity; // returns the value of airportCapacity
  }

  

}

module.exports = Airport; // export Airport so it can be used in other codes
