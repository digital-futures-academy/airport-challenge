const Plane = require('./Plane');

class Airport {
  landedPlanes = [];
  landedCapacity;

  constructor(defaultLandedCapacity) {
    this.landedCapacity = defaultLandedCapacity;
  }
  // constructor(defaultLandedCapacity) {
  //   if(Number.isInteger(defaultLandedCapacity) && defaultLandedCapacity > 0) {
  //     this.landedCapacity = defaultLandedCapacity;
  //   } else {
  //     throw new Error('Landed capacity must be a positive integer.');
  //   }
  // }


    landPlane = plane => {
        if (plane instanceof Plane && this.getLandedPlaneCount() < this.getLandedCapacity() && !this.isPlanePresent(plane)) {
          this.landedPlanes.push(plane);
          return true;
        } else {
          return false;
    }
    }
    getLandedCapacity() {
        return this.landedCapacity;
    }
    newLandedCapacity(newCapacity) {
      this.landedCapacity = newCapacity;
     }
    getLandedPlaneCount() {
        return this.landedPlanes.length;
    }
    isPlanePresent(plane) {
      const indexOfPlaneInLandedPlanes = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);
      return indexOfPlaneInLandedPlanes > -1;
    }
  
    takeOffPlane = plane => {
    const indexOfPlaneInLandedPlanes = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);
    
    if (indexOfPlaneInLandedPlanes > -1) {
            this.landedPlanes.splice(indexOfPlaneInLandedPlanes, 1);
    }
      return (indexOfPlaneInLandedPlanes > -1) ? true : false;
    }
    }


module.exports = Airport;



/*
|Airport  | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean | */
