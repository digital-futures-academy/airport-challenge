//think about private properties

class Airport {

    maxCapacity;
    landedPlanes;

    constructor(maxCapacity = 1, landedPlanes = []) {
        this.maxCapacity = maxCapacity;
        this.landedPlanes = landedPlanes;
    };

    landPlane(plane) {
        // && this.plane. !== 'no id'
        if (!this.isFull() && this.getPlaneId === 'no id') { //remember the ! for not full
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

    planeTakeOff(plane) {
        const index = this.landedPlanes.indexOf(plane);
        this.landedPlanes.splice(index, 1);
    };

    getPlaneId(plane) {
        return plane.getId();
    }
}

module.exports = Airport;