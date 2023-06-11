const airport = {
    airportDestination: [],
    airportCapacity: 100,

    land: function (plane) {
        this.airportDestination.push(plane);
        return true;
    },
    isAtCapacity: function () {
        if (this.airportCapacity > 100) { return true } else { return false };
    },
    setCapacity: function (capacity) {
        this.airportCapacity = capacity;
    },
    isFull: function () {
        return this.isAtCapacity();
    },
};

module.exports = airport;



