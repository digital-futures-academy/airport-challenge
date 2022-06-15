class Airport {
  #landedPlanes = [];
  #capacity = 100;

  // To land a plane, I want to add said plane to the array landedPlanes.
  landPlane = inputPlane => this.#landedPlanes.push(inputPlane);

  //To implement encapsulation, made landedPlanes PRIVATE so a getter is needed to return the array
  getLandedPlanes = () => this.#landedPlanes;

  //To check what the airport capacity is, I want to create a getter method that returns the value of capacity
  getCapacity = () => this.#capacity;

  //To modify the airport's capacity, I want to create a setter method that takes the desired capacity as an input
  setCapacity = (newCapacity) => this.#capacity = newCapacity;

}

module.exports = Airport;


