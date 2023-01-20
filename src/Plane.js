class Plane {
    flying = false;
    land() {
        this.flying = false;
    }
    checkFlying() {
        return this.flying;
    }
}

module.exports = Plane;
