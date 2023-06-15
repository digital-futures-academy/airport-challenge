const airport = {
    listOfPlanes: [],
    landPlane: function (plane) {
        this.listOfPlanes.push(plane);
    },
    capacity: 1,
    maxCapacity: 30,
    defaultCapacity: function (newCapacity) {
        if (newCapacity > this.maxCapacity) {
            throw new Error("Exceeded maximum capacity");
        } else {
            this.capacity = newCapacity;
        }
    },
    isFull: function () {
        return this.listOfPlanes.length >= this.capacity;
    },
    takeOff: function (plane) {
        const index = this.listOfPlanes.findIndex(p => p.id === plane.id);
        if (index !== -1) {
            this.listOfPlanes.splice(index, 1);
            return "Plane take-off confirmed";
        } else {
            return "Plane take-off failed";
        }
    },




}
module.exports = airport;
