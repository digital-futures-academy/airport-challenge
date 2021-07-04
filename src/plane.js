class Plane{
    constructor(name) {
        this.name = name;
        this.landed = false;
    }

    isLanded() {
        return this.landed;
    }

    land() {
        this.landed = true;
    }

    air() {
        this.landed = false;
    }
}

module.exports = Plane;