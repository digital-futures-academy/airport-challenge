const airport = {
    land: function (plane) {
        this.airportDestination.push(plane);
        return true;
    },
    isAtAirport: function (plane) {
        return this.airportDestination.includes(plane);
    }
};

module.exports = airport;



