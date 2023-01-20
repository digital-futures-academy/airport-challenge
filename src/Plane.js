class Plane {
    flying;
    constructor(flying = false) {
        this.flying = flying;
    }
    land() {
        this.flying = false;
    }
    checkFlying() {
        return this.flying;
    }
}

module.exports = Plane;
