class Plane {
    constructor() {
        this.isLanded = false;
    }

    land() {
        this.isLanded = true;
    }

    takeOff() { 
        this.isLanded = false;
    }
}

module.exports = Plane;
