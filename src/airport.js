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
      if (this.planes.length >= this.capacity) {
        throw new Error("Cannot land plane when airport is full.");
      }
      // this.planes.push(plane);
      // console.log("Plane landed successfully.")
    } catch (error) {
      console.log("Airport is full, this plane cannot land.")
      return error;
      // QUESTION: Is it correct to return an error? Or should errors only be thrown rather than returned?
    }
  }

}



export { Airport };
