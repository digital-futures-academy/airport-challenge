class Plane {
    constructor(planeId) {
      this.planeId = planeId;
      this.currentLocation = null;
      this.status = null; // 'in_air' or 'landed'
    }
  
    setStatus(status) {
      this.status = status;
    }
  
    setCurrentLocation(location) {
      this.currentLocation = location;
    }
  
    land(airport) {
      if (!airport.isFull()) {
        airport.landPlane(this);
      } else {
        throw new Error('Airport is full. Unable to land.');
      }
    }
  
    takeOff(airport) {
      if (this.currentLocation === airport.name) {
        airport.takeoffPlane(this);
      } else {
        throw new Error('This plane is not at this airport.');
      }
    }
  }
  
  module.exports = Plane;