class Plane {
    constructor(id) {
        this.id = id;
        this.landed = false;

    }

    getId() {
        return this.id;
    }

    getLanded() {
        return this.landed;
    }

    setLanded(landedStatus) {
        this.landed = landedStatus;
    }

}

module.exports = Plane;
