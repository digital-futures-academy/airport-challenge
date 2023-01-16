class Plane {
    constructor(name) {
      this.name =name;
    }

    get getPlaneName() {
      return this._name;
  }
}



module.exports = Plane;