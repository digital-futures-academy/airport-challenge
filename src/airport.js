class Airport {
  // here's a starting point for you

  constructor(airport = []) {
    this.airport = airport;
  }
  maxCapacity = 10;

  landPlane(plane) {
    if (this.isAirportFull() === false) {
      this.airport.push(plane);
      console.log(this.airport);
      return true;
    }
    else {
      console.log(this.airport, 'This airport is full');
      return false;
    }
  }
  
  changeCapacity(num) {
    if (num < this.airport.length) {
      console.log('ERROR: Capacity lower than number of planes currently in airport');
      return false;
      
    }
    else {
      this.maxCapacity = num;
      console.log(this.airport);
      return true;
    }

  }

  isAirportFull(airport) {
    if (this.airport.length >= this.maxCapacity) {
      console.log(airport.length);
      return true;
    }
    return false;
  }

  getCurrentCapacity() {
    return this.airport.length;
  }

  getMaxCapacity() {
    return this.maxCapacity;
  }

}


module.exports = Airport;
