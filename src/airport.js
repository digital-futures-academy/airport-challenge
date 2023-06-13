
const airport = {
    maxCapacity: 1,
    landedPlanes: [],
    landPlane: function (item) {
        if (item?.id) {
            this.landedPlanes.push(item)
        }
    },
    increaseAirportCapacity: function (item) {
        this.maxCapacity += item
    },

};

module.exports = {
    airport,
}