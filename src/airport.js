const airport = {
    planeLanded: [],
    defaultAirportCapacity: 3,

    land: function (plane) {
        if (this.planeLanded.length >= this.defaultAirportCapacity || this.planeLanded.includes(plane)) {
            return false;
        } else {
            this.planeLanded.push(plane);
            return true;
        }
    },
    updateCapacity: function (newCapacity) {
        this.defaultAirportCapacity = newCapacity;
        return this.defaultAirportCapacity;

    },
    takeOff: function (plane) {
        if (plane.isPlaneFlying() || !plane.isAtAirport()) {
            return false;
        }
        const index = this.planeLanded.indexOf(plane);
        if (index !== -1) {
            this.planeLanded.splice(index, 1);
            return true;
        };
    },
};

module.exports = airport;



