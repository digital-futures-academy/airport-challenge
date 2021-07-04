class Plane {
    constructor (inAir = false) {
        this.inAir = inAir
        this.name = 'Boeing 747'
    }
    land () {
        this.inAir = false
    }
    takeOff () {
        this.inAir = true
    }
  }
  
  module.exports = Plane;