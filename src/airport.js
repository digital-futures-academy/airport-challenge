class Airport {
  // here's a starting point for you
  constructor(name, capacity) {
    this.terminal = []
    this.name = name;
    this.capacity = capacity;
  }

  land(plane) {
    if (this.terminal.length < this.capacity) {
      this.terminal.push(plane)
    } else {
      return 'Error: Airport is full'
    }
  }

  capacityEditor(input) {
    this.capacity = input;
  }

  takeOff(plane) {
    for (let i = 0; i < this.terminal.length; i++) {
      if (this.terminal[i] === plane) {
        this.terminal.splice(i, 1)
      }
    }
  };

  planeTracker() {
    if (this.terminal.includes(input)) {
      return 'plane is already here';
    } else {
      return 'plane is not here';
    }
  }

};



const airportOne = new Airport('MAN', 5);



module.exports = Airport;
