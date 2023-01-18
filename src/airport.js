// Airport Class

const { assertEquals, assertMoreThan } = require("../testing-frameworks.js");
const Plane = require(`./plane.js`);

class Airport {
  
  //properties of Airport
  groundedPlanes = []; //array for planes in the airport

  // constructor for airport
  constructor(airportID = 'the airport', airportCapacity = 10) {
    this.airportID = airportID;
    this.airportCapacity = airportCapacity;
  } // set default values for these properties and they can be set when creating the airport

  //functions of airport
  isAirportFull() {
    return assertEquals(this.airportCapacity, this.groundedPlanes.length); // true or false
  }

  changeAirportCapacity = capacity => {
    if (typeof capacity === 'number' && capacity >= 0) {
      this.airportCapacity = capacity; // changes the capacity of the airport only if the input is a number
      return console.log(`The capacity of ${this.airportID} has changed to ${this.airportCapacity}.`); // tell the user command has changed the airport capacity
    } else {
      return console.log(`Invalid input, ${this.airportID} capacity has not changed.`) // tell the user that the input is invalid and nothing has changed
    }

  }

  getAirportCapacity() {
    return console.log(`${this.airportID} has a capacity of ${this.airportCapacity}.`); // returns the value of airportCapacity
  }

  planeExists = plane => {
    return assertMoreThan(-1, this.groundedPlanes.findIndex(airportPlane => airportPlane.planeID === plane.planeID)); // true or false
  }

  landPlane = plane => {
    if (plane instanceof Plane && this.isAirportFull() === false && this.planeExists(plane) === false) {
      this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array if the input is an instance of Plane class
      return console.log(`${this.airportID} is not full, ${plane.planeID} has landed. There are ${this.groundedPlanes.length} plane(s) at ${this.airportID}.`); // show message that the plane has landed
    } else if (plane instanceof Plane && this.isAirportFull() === true && this.planeExists(plane) === false) {
      return console.log(`${this.airportID} is full, ${plane.planeID} has not landed.`) // show a message that the plane has on landed
    } else if (this.planeExists(plane) === true) {
      return console.log(`${plane.planeID} is already at ${this.airportID} and cannot land.`);
    } else {
      return console.log(`Invalid input, nothing has landed at ${this.airportID}.`) // message for any invalid inputs put into the system
    }
  }

    takeoffPlane = plane => {
      if (plane instanceof Plane && this.planeExists(plane) === true) {
        this.groundedPlanes.splice(this.groundedPlanes.findIndex(airportPlane => airportPlane.planeID === plane.planeID), 1);
        return console.log(`${plane.planeID} has taken off from ${this.airportID}.`)
      } else if (plane instanceof Plane && this.planeExists(plane) === false) {
        return console.log(`${plane.planeID} is not at ${this.airportID} and cannot take off.`)
      } else {
        return console.log(`Invalid input, nothing has taken off from ${this.airportID}.`) // message for any invalid inputs put into the system
      }
  }
  
}
  



module.exports = Airport; // export Airport so it can be used in other codes
