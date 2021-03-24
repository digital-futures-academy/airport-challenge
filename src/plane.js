class Plane {
  constructor () {
    this._landed = false
  }

  isLanded () {
    return this._landed
  }

  land () {
    this._landed = true
  }

  takeoff () {
    this._landed = false
  }
}

module.exports = Plane
