class Airport {
  constructor(airport = []) {
    this.airport = airport;
  }
  maxCapacity = 10;

  landPlane(planes) {
    for (let i = 0; i < planes.length; i++) {
      if (this.isAirportFull() === false) {
        if (this.weather() === false || this.airport.indexOf(planes[i]) !== -1) {
          console.log(`${planes[i]} cannot land because it is stormy or has already landed!`);
        }
        else if (this.isPlaneInAirport() === false) {
          this.airport.push(planes[i]);
          console.log(`${planes[i]} has landed!`)
        }
        else {
          console.log(`${planes[i]} is already in the airport.`);
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
    for (let i = 0; i < planes.length; i++) {
      if (this.airport.indexOf(planes[i]) === -1) {
        console.log(`${planes[i]} is not in the airport.`);
        result = false;
      }
      else if (this.weather() === false) {
        console.log(`${planes[i]} cannot take off as it is stormy.`);
        result = false;
      }
      else {
        this.airport.splice(i, 1);
        console.log(`The ${planes[i]} has taken off`)
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

  isAirportFull() {
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
    if (this.airport.indexOf(plane) === -1) {     //later realised I could have just used array.include 😂
      return false;
    }
    else {
      return true;
    }
  }

  printAirport() {
    console.log(this.airport);
  }

  weather() {
    let randVal = Math.floor(Math.random() * 2);
    if (randVal === 0) {
      console.log('Weather is sunny');
      return true;
    }
    else if (randVal === 1) {
      console.log('Weather is stormy');
      return false;
    }
    else {
      console.log('Weather has broken');
    }
  }
}


module.exports = Airport;
