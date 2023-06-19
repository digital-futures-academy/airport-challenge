class Airport {
    constructor(name, airportCapacity = 10) {
      this.name = name;
      this.airportCapacity = airportCapacity;
      this.currentPlanes = [];
    }
  
    isFull() {
      return this.currentPlanes.length >= this.airportCapacity;
    }
  
    landPlane(plane) {
      if (this.isFull()) {
        throw new Error('Cannot land plane, airport is full');
      }
  
      this.currentPlanes.push(plane);
      plane.setStatus('landed');
      plane.setCurrentLocation(this.name);
    }
  
    takeoffPlane(plane) {
      if (!this.currentPlanes.includes(plane)) {
        throw new Error('This plane is not at this airport.');
      }
  
      this.currentPlanes = this.currentPlanes.filter(p => p !== plane);
      plane.setStatus('in_air');
      plane.setCurrentLocation(null);
    }
  }
  
  module.exports = Airport;