class Airport {
  constructor(airport, plane) {
    this._plane = plane;
    this._airport = airport
  }
  get airport(); {
  return this._airport;
}
  get plane(); {
  return this._plane;
}

  

}

module.exports = Airport;
