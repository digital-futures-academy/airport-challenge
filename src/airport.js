const isWeatherStormy = require('./weather')

class Airport {
  // here's a starting point for you
  constructor(capacity, airspace, airplanes, randomWeatherToggle = false, manualStorm = false) {
    this.capacity = capacity;
    this.airspace = airspace;
    this.airplanes = airplanes;
    this.manualStorm = manualStorm;
    this.randomWeatherToggle = randomWeatherToggle;
  }

  land(tailNumber) {
    if (this.manualStorm === true) {
      return `Unsuccessful operation; weather is stormy`;
    } else if (this.randomWeatherToggle === true && isWeatherStormy() === true) {
      return `Unsuccessful operation; weather is stormy`;
    } else if (!this.airspace.includes(tailNumber)) {
      return `Landing unsuccessful; ${tailNumber} cannot be found in airspace`;
    } else if (!this.capacity > this.airplanes.length) {
      return `Landing unsuccessful; Airport is full`;
    } else if (this.airplanes.includes(tailNumber)) {
      return `Error: ${tailNumber} already at airport`
    } else if (this.airspace.includes(tailNumber) && this.capacity > this.airplanes.length && !this.airplanes.includes(tailNumber)) {
      this.airplanes.push(tailNumber);
      this.airspace = this.airspace.filter(e => e !== tailNumber)
      return `Landing successful; ${tailNumber} has arrived at airport`;
    }
  }
  override(newCapacity) {
    if (!Number.isInteger(newCapacity)) {
      return `Error: Airport capacity must be set to an integer`
    } else if (this.airplanes.length > newCapacity) {
      return `Error: Airport capacity must be greater than number of planes already in airport`
    } else {
      this.capacity = newCapacity
      return `Airport capacity has been successfully overridden to ${newCapacity}`
    }
  }
  takeOff(tailNumber) {
    if (this.manualStorm === true) {
      return `Unsuccessful operation; weather is stormy`;
    } else if (this.randomWeatherToggle === true && isWeatherStormy() === true) {
      return `Unsuccessful operation; weather is stormy`
    } else if (!this.airplanes.includes(tailNumber)) {
      return `Error: ${tailNumber} is not at airport`
    } else {
      this.airplanes = this.airplanes.filter(e => e !== tailNumber)
      this.airspace.push(tailNumber)
      return `Take off successful; ${tailNumber} is no longer at the airport`
    }
  }

}

module.exports = Airport;
