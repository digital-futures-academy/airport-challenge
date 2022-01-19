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
      if (this.planes.length <= capacity) {
        this.planes.push(plane);
      } else {
        let err = new Error("Airport is full, this plane cannot land.");
      }
    }
    catch (err) {

    }
  }

}

export { Airport };
