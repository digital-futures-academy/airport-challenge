class Airport {
  constructor(capacity = 5) {
    this.onGround = [];
    this.capacity = capacity;
  }
  land(plane) {
    const planeIds = this.onGround.map(x => x.id);
    if (!planeIds.includes(plane.id)) {
      this.onGround.push(plane);
    } else {
      console.log(`The plane with id: ${plane.id} is already in the airport and cannot land again`);
      return null;
    }

  }
  isFull() {
    return (this.onGround.length === this.capacity) ? true : false;
  }
  takeOff(plane) {
    const planeIds = this.onGround.map(x => x.id);
    if (planeIds.includes(plane.id)) {
      let index = planeIds.indexOf(plane.id);
      let removedPlane = this.onGround.splice(index, 1);
      return removedPlane[0];
    } else {
      console.log(`There are no more planes to take off`)
      return null;
    }

  }

}

module.exports = Airport;
