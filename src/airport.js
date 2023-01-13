// Airport Class

const Plane = require(`./plane.js`);

class Airport {
  
  //properties of Airport
  groundedPlanes = []; //array for planes in the airport
  airportCapacity = 10; // sets the capacity of the airport to 10

  //functions of airport
  landPlane = plane => {
    if (plane instanceof Plane) this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array if the input is an instance of Plane class
  }

  changeAirportCapacity = capacity => {
    if (typeof capacity === 'number') this.airportCapacity = capacity; // changes the capacity of the airport only if the input is a number
  }

  getAirportCapacity = () => {
    return this.airportCapacity; // returns the value of airportCapacity
  }
}

module.exports = Airport; // export Airport so it can be used in other codes
