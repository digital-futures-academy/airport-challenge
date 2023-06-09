let airport = {
    listOfPlanes: [],
    airportCapacity: 3,
    landPlane: function (plane) {
        if (plane?.planeId) {
            this.listOfPlanes.push(plane);
        }
    },
    changeAirportCapacity: function (newCapacity) {
        if (typeof newCapacity === "number") {
            this.airportCapacity = newCapacity;
        }
    },
};
module.exports = airport;
