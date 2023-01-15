const Plane = require('./Plane');

class Airport {
  landedPlanes = [];
  landedCapacity;

  constructor(defaultLandedCapacity) {
    this.landedCapacity = defaultLandedCapacity;

  }
    landPlane = plane => {
        if (plane instanceof Plane) this.landedPlanes.push(plane);
    };
    getLandedCapacity() {
        return this.landedCapacity;
    }
    newLandedCapacity(newCapacity) {
      this.landedCapacity = newCapacity;
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
