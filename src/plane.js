const location = 'airport';
const plane = {
    location,
    isAtAirport: function () {
        return this.location === 'airport';
    },

};

module.exports = plane;