//think about private properties

class Airport {

    maxCapacity;
    landedPlanes;

    constructor(maxCapacity = 1, landedPlanes = []) {
        this.maxCapacity = maxCapacity;
        this.landedPlanes = landedPlanes;
    };

    landPlane(plane) {
        if (!this.isFull()) { //remember the ! for not full
            this.landedPlanes.push(plane);
        }
    };

    capacityMutator(newCapacity) {
        if (newCapacity % 1 === 0 && typeof newCapacity === 'number') {
            this.maxCapacity = newCapacity;
        };
    };

    isFull() {
        return this.maxCapacity === this.landedPlanes.length;
    };

}

module.exports = Airport;