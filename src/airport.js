class Airport {
  constructor() {
    this.listOfPlanes = [];
  }

  landPlane(plane) {
    this.listOfPlanes = [...this.listOfPlanes, plane];
  }
}

export default Airport;
