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
    takeOff: function (plane) {
        let planeIndex = this.listOfPlanes.findIndex(landedPlanes => landedPlanes.planeId === plane.planeId);
        if (planeIndex >= 0) {
            this.listOfPlanes.splice(planeIndex, 1);
        }
    },
    isPlaneInAirport: function (plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId) !== -1;
    },
};
module.exports = airport;
