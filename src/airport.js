class Airport {
  // here's a starting point for you

  constructor(airport = []) {
    this.airport = airport;
  }
  maxCapacity = 10;

  landPlane(planes) {
    for (let i = 0; i < planes.length; i++) {
      if (this.isAirportFull() === false) {
        if (this.isPlaneInAirport() === false) {
          this.airport.push(planes[i]);
        }
      }
      else {
        console.log('This airport is full');
        return false;
      }
    }
    return true;
  }

  planeTakeoff(planes) {
    result = true;
    for (let i = planes.length - 1; i >= 0; i--) {
      if (this.airport.indexOf(planes) === -1) {
        console.log(`This ${planes[i]} is not in the airport.`);
        result = false;
      }
      else {
        this.airport.splice(i, 1);
      }
    }
    return result;
  }
  
  changeCapacity(num) {
    if (num < this.airport.length) {
      console.log('ERROR: Capacity lower than number of planes currently in airport');
      return false;
      
    }
    else {
      this.maxCapacity = num;
      return true;
    }

  }

  isAirportFull(airport) {
    if (this.airport.length >= this.maxCapacity) {
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

  isPlaneInAirport(plane) {
    if (this.airport.indexOf(plane) === -1) {
      return false;
    }
    else {
      return true;
    }
  }

  printAirport() {
    console.log(this.airport);
  }
}


module.exports = Airport;
