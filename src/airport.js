class Airport {
    constructor() {
        this.planesOnGround = [];
        this.defaultCapacity = 0;
    }
    landPlane(plane) {
        this.planesOnGround.push(plane);
    }
    overrideDefaultCapacity(newDefaultCapacity) {
        if (!Number.isInteger(newDefaultCapacity)) {
            throw TypeError("overrideDefaultCapacity requires an integer");
        }
        if (newDefaultCapacity < 0) {
            throw RangeError("overrideDefaultCapacity requires a positive integer");
        }
        this.defaultCapacity = newDefaultCapacity;
    }
}

module.exports = {
    Airport,
}