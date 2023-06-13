//think about private properties

class Airport {

    maxCapacity;
    landedPlanes;

    constructor(maxCapacity = 1, landedPlanes = []) {
        this.maxCapacity = maxCapacity;
        this.landedPlanes = landedPlanes;
    };

    landPlane(plane) {
        if (this.landedPlanes.length < this.maxCapacity) {
            this.landedPlanes.push(plane);
        }
    };

    capacityMutator(newCapacity) {
        if (newCapacity % 1 === 0 && typeof newCapacity === 'number') {
            this.maxCapacity = newCapacity;
        }
    }

}

module.exports = Airport;