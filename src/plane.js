let location = 'airport';
const plane = {
    location,
    isAtAirport: function () {
        return this.location === 'airport' && !this.isPlaneFlying();
    },
    isPlaneFlying: function () {
        return this.location === 'flying';
    },

};

module.exports = plane;