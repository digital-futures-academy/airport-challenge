class Airport {
    constructor() {
        this.planesOnGround = [];
        this.defaultCapacity = 0;
        this.capacity = this.defaultCapacity;
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

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
}

module.exports = {
    Airport,
}