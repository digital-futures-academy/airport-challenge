
const airport = {
    airportCapacity: 10,
    landedPlanes: [],

    indexOfPlane: function (plane) {
        return this.landedPlanes.indexOf(plane);
    },


    landPlane: function (planeID) {
        if (!this.isFull() && !this.isInAirport(planeID)) {
            return this.landedPlanes.push(planeID);
        }
    },


    isFull: function () {
        return this.landedPlanes.length >= this.airportCapacity;
    },


    isInAirport: function (planeID) {
        return this.landedPlanes.includes(planeID)
    },


    overrideCapacity: function (newCapacity) {
        return this.airportCapacity = newCapacity;
    },


    planeTakeOff: function (planeID) {
        if (this.isInAirport(planeID)) {
            return this.landedPlanes.splice(this.indexOfPlane(planeID), 1);
        }
    }
}

module.exports = airport;