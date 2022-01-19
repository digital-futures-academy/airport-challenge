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

}

export { Airport };
