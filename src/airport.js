class Airport {
  constructor(name, planes = [], capacity = 100,) {
    this.name = name;
    this.capacity = capacity;
    this.planes = planes;
  }

  changeCapacity(newCapacity) {
    this.capacity = newCapacity;
    console.log(`Capacity changed to ${newCapacity}`);
  }

  landPlane(plane) {
    try {
      if (this.planes.includes(plane)) {
        console.log(`Plane ${plane.name} is already in the airport. Cannot land again.`);
        throw new Error("Cannot land a plane which is already in the airport.");
      }

      if (this.planes.length >= this.capacity) {
        console.log(`Airport is full, plane ${plane.name} cannot land.`)
        throw new Error("Cannot land plane when airport is full.");
      }
      this.planes.push(plane);
      console.log(`Plane ${plane.name} landed successfully at ${this.name}.`)
    } catch (error) {
      return error;
      // QUESTION: Is it correct to return an error? Or should errors only be thrown/caught rather than returned?
    }
  }

  takeOffPlane(plane) {
    try {
      if (!this.planes.includes(plane)) {
        throw new Error("Cannot take off a plane which isn't in the airport.");
      }
      // const planeIndex = this.planes.indexOf(plane);
      // this.plane.splice(planeIndex, 1);
      this.planes = this.planes.filter(elt => elt !== plane);
      console.log(`Plane ${plane.name} has taken off successfully from ${this.name}.`);
      // Not sure which way better, probably .indexOf since chance it doesn't have to traverse whole array (hence faster?)
    } catch (error) {
      console.log(`Plane ${plane.name} is not in the airport. Cannot take off.`);
      return error;
    }
  }

}


export { Airport };
