export default class Airport {
  constructor() {
    this.planes = []
  }
  landPlane(plane) {
    if (plane) { this.planes.push(plane) };
  }
}


