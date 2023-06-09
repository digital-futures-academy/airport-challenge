let airport = {
    listOfPlanes: [],
    airportCapacity: 3,
    landPlane: function (plane) {
        if (plane?.planeId && !this.isAirportFull()) {
            this.listOfPlanes.push(plane);
        }
    },
    changeAirportCapacity: function (newCapacity) {
        if (typeof newCapacity === "number" && Number.isInteger(newCapacity)) {
            this.airportCapacity = newCapacity;
        }
    },
    isAirportFull: function () {
        return this.airportCapacity <= this.listOfPlanes.length;
    },
};
module.exports = airport;
