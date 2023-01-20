class Plane {
    flying;
    constructor(flying = false) {
        this.flying = flying;
    }
    land() {
        this.flying = false;
    }
    takeOff() {
        this.flying = true;
    }
    checkFlying() {
        return this.flying;
    }
}

module.exports = Plane;
