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
      if (this.planes.length < this.capacity) {
        this.planes.push(plane);
        // return ....
      } else {
        throw new Error("Airport is full, this plane cannot land.");
      }
    }
    catch (error) {
      return error;
      // I realise I could just return the error without throwing/catching but I wanted to practice...

      // QUESTION: Is it bad practice to return rather than throw errors? What is the most common setup?
    }
  }

}

export { Airport };
