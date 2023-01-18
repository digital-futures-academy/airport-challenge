const Plane = require('./Plane');

class Airport {
  landedPlanes = [];
  landedCapacity;

  constructor(defaultLandedCapacity) {
    this.landedCapacity = defaultLandedCapacity;
   }
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
  // The function then checks if the index is greater than -1, which is a boolean expression returning true or false depending on if the plane has been found in the array. If the index is greater than -1, the function will return true(plane is present), otherwise it will return false(plane is not present)
  
    takeOffPlane = plane => {
    const indexOfPlaneInLandedPlanes = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);
    
    if (indexOfPlaneInLandedPlanes > -1) {
            this.landedPlanes.splice(indexOfPlaneInLandedPlanes, 1);
        }
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
