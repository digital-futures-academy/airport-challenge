class Plane {
  constructor(name) {
    this._name = name,
    this._landed = false
  }

  hasLanded() {
    if (this._landed === false) {
      return false
    } else {
      return true
    }
  }

  land() {
    this._landed = true
  }

  takeOff() {
    this._landed = false
  }
}

module.exports = Plane
