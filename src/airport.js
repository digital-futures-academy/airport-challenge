const Plane = require('./Plane');

class Airport {
  landedPlanes = [];
  landedCapacity;

  constructor(defaultLandedCapacity) {
    this.landedCapacity = defaultLandedCapacity;
  }
    landPlane = plane => {
        if (plane instanceof Plane && this.getLandedPlaneCount() < this.getLandedCapacity()) {
      this.landedPlanes.push(plane);
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
