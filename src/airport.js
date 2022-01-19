class Airport {
  constructor(name, capacity = 100) {
    this.name = name;
    this.capacity = capacity;
  }

  changeCapacity(newCapacity) {
    this.capacity = newCapacity;
  }

}

export { Airport };
