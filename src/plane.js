class Plane {
    constructor(planeId) {
      this.planeId = planeId;
      this.currentLocation = null;
      this.status = null; // 'in_air' or 'landed'
    }
  
    land(airport) {
      if (!airport.isFull()) {
        this.status = 'landed';
        this.currentLocation = airport.name;
        airport.landPlane(this);
      } else {
        throw new Error('Airport is full. Unable to land.');
      }
    }
  
    takeOff(airport) {
      if (this.currentLocation === airport.name) {
        this.status = 'in_air';
        this.currentLocation = null;
        airport.takeoffPlane(this);
      } else {
        throw new Error('This plane is not at this airport.');
      }
    }
  }
  
  module.exports = Plane;
  