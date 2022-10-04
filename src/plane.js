class Plane {

    planeID;

    constructor(planeID) {
        this.planeID = planeID;
    }

    getId() {
        return this.planeID;
    }
}

module.exports = Plane;