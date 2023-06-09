class Airport {
    constructor() {
        this.planesOnGround = [];
    }
    landPlane(plane) {
        this.planesOnGround.push(plane);
    }
}

module.exports = {
    Airport,
}