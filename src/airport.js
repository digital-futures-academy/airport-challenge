
const airport = {

    airport: "Heathrow",

    planeID: " ",

    maxAirportCapacity: 5000,

    currentAirportCapacity: 0,

    planesAtAirport: [],


    landPlane: function (planeID) {
        if (airport.isFull() || airport.planesAtAirport.includes(planeID)) {
            return false
        } else {
            airport.currentAirportCapacity += 1
            this.planesAtAirport.push(planeID)
            return true
        }
    },

    planeTakeOff: function (planeId) {
        if (this.planesAtAirport.includes(planeId)) {
            this.currentAirportCapacity -= 1;
            this.planesAtAirport.pop(planeId)
            return true
        } else return false
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


