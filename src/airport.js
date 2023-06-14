const airport = {
    listOfPlanes: [],
    landPlane: function (plane) {
        this.listOfPlanes.push(plane);
    },
    capacity: 1,
    defaultCapacity: function (newCapacity) {
        this.capacity = newCapacity;

    }



}
module.exports = airport;
