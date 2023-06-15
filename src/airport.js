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
    }




}
module.exports = airport;
