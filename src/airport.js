class Airport {
    constructor() {
        this.planesOnGround = [];
        this.defaultCapacity = 0;
        this.capacity = this.defaultCapacity;
    }
    landPlane(plane) {
        this.planesOnGround.push(plane);
    }
    /*
    overrideDefaultCapacity(newDefaultCapacity) {
        if (!Number.isInteger(newDefaultCapacity)) {
            throw TypeError("overrideDefaultCapacity requires an integer");
        }
        if (newDefaultCapacity < 0) {
            throw RangeError("overrideDefaultCapacity requires a positive integer");
        }
        this.defaultCapacity = newDefaultCapacity;
    }
    // tests for this exist in canSetCapacity.spec.js
    */


    setCapacity(newCapacity) {
        if (!Number.isInteger(newCapacity)) {
            throw TypeError("setCapacity requires an integer");
        }
        if (newCapacity < 0) {
            throw RangeError("setCapacity requires a positive integer");
        }
        this.capacity = newCapacity;
    }
    canLand() {
        return this.capacity > this.planesOnGround.length;
    }

    takeOff(plane) {
        let planeIndexOnGround = this.planesOnGround.indexOf(plane);
        if (planeIndexOnGround === -1) {
            return false;
        }
    }
}

module.exports = {
    Airport,
}