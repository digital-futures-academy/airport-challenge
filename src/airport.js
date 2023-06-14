const airport = {
    landedPlanes: [],
    defaultAirportCapacity: 10,

    landPlanes: function (planes)
    {

        this.landedPlanes = [...this.landedPlanes, planes]

    },

    // defaultAirportCapacity: function (airportCapacity)
    // {
    //     return this.airportCapacity;
    // },

    modifyAirportCapacity: function (amount)
    {

        return this.defaultAirportCapacity + amount;

    },

}

module.exports = airport;
