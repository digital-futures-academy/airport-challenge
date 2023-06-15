const { weather } = require("./weather");


const airport = {

    name: "Heathrow",

    maxAirportCapacity: 5000,

    planesAtAirport: [],

    currentAirportCapacity: function () {
        return this.planesAtAirport.length
    },

    landPlane: function (planeID) {
        if (airport.isFull() || airport.planesAtAirport.includes(planeID) || (weather.currentWeather == "Stormy")) {
            return false
        } else {
            this.planesAtAirport.push(planeID)
            return true
        }
    },

    planeTakeOff: function (planeId) {
        if (this.planesAtAirport.includes(planeId) && (weather.currentWeather == "Sunny")) {
            this.planesAtAirport.pop(planeId)
            return true
        } else return false
    },

    setMaxAirportCapacity: function (capacity) {
        this.maxAirportCapacity = capacity
    },

    isFull: function () {
        if (airport.currentAirportCapacity() >= airport.maxAirportCapacity) {
            return true
        } else return false
    }


};


module.exports = {
    airport
};


