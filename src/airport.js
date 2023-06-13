const airportCapacity = 100;
const airport = {
    planeLanded: [],
    airportCapacity,

    land: function (plane) {
        return (this.isFull() || this.planeLanded.includes(plane) ? false : (this.planeLanded.push(plane), true));
    },
    setMax: function (capacity) {
        this.airportCapacity = capacity;
    },
    isFull: function () {
        return this.planeLanded.length === this.airportCapacity;
    },
    takeOff: function (plane) {
        if (!this.planeLanded.includes(plane)) {
            return false;
        }
        const index = this.planeLanded.indexOf(plane);
        if (index !== -1) {
            this.planeLanded.splice(index, 1);
            return true;
        }
    },
};

module.exports = airport;



