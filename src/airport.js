class Airport {
  #landedPlanes = [];
  #capacity = 100;

  // To land a plane, I want to add said plane to the array landedPlanes.
  landPlane = inputPlane1 => {
    //This allows landing only is the airport is not at capacity yet
    if (this.#capacity > this.#landedPlanes.length) {
      this.#landedPlanes.push(inputPlane1);
    }
    return new Error(`Abort landing, airport at capacity.`)
  }

  //To implement encapsulation, made landedPlanes PRIVATE so a getter is needed to return the array
  getLandedPlanes = () => this.#landedPlanes;

  //To check what the airport capacity is, I want to create a getter method that returns the value of capacity
  getCapacity = () => this.#capacity;

  //To modify the airport's capacity, I want to create a setter method that takes the desired capacity as an input
  setCapacity = newCapacity => this.#capacity = newCapacity;

  //To allow a plane to take off, I want to remove the plane from the landedPlanes array
  takeOff = inputPlane2 => {
    //array.filter(parameters) returns a new array containing only the parameters
    this.#landedPlanes = this.#landedPlanes.filter(planes => planes !== inputPlane2);
    // The .filter() parameter is anything in the array but the takeOff() parameter
    return `${inputPlane2} completed take off`;
  }

}

module.exports = Airport;


