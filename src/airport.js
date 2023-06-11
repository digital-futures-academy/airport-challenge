
const airport = {

    airport: "Heathrow",

    planeID: " ",

    maxAirportCapacity: 5000,

    currentAirportCapacity: 0,


    landPlane: function (planeID) {
        if (airport.isFull()) {
            return false
        } else {
            airport.currentAirportCapacity += 1
            return true
        }
    },

    setAirportCapacity: function (capacity) {
        this.maxAirportCapacity = capacity
    },

    isFull: function () {
        if (airport.currentAirportCapacity >= airport.maxAirportCapacity) {
            return true
        } else return false
    }

};



module.exports = {
    airport
};


