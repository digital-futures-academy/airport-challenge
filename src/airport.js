const airport = {
  // here's a starting point for you
  listOfPlanes: [],
  defCapacity: 70,

  maxCapacity(newCapacity) {
    this.defCapacity = newCapacity;
  },

  landPlane(plane) {
    if (plane.id) {
      this.listOfPlanes.push(plane);
    } else if (plane?.id && !this.listOfPlanes.includes(plane)) {
      this.listOfPlanes.push(plane);
    } else {
    }
  },

  isAirportFull() {
    return this.defCapacity >= 70; //Airport is full, plane can't land
  },

  planeTakeOff(plane) {
    if (plane?.id) {
      const index = this.listOfPlanes.indexOf(plane);
      const remove = this.listOfPlanes.splice(index, 1);
    }
  },

  planeExists(plane) {
    const index = this.listOfPlanes.findIndex(p => p === plane);
    if (index !== -1) {
      this.listOfPlanes.splice(index, 1);

    } else if (index >= 1) {
      this.listOfPlanes.push(index, 1);

    }
  }
};


module.exports = airport;
