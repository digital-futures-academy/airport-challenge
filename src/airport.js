export default class Airport {
  constructor() {
    this.planes = []
    this.capacity = 0;
  }
  landPlane(plane) {
    if (plane) { this.planes.push(plane) };
  }
  overrideAirportCapacity(override) {
    this.capacity += override;
  }
}


