const airport = {
    land: function (plane) {
        this.destination.push(plane);
        return true;
    },
    isAtAirport: function (plane) {
        return this.destination.includes(plane);
    }
};

module.exports = airport;



