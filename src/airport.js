const airport = {
    landedPlanes: [],
    defaultAirportCapacity: 10,
    // airportCapacity: 0,

    modifyAirportCapacity: function (amount)
    {

        this.defaultAirportCapacity = amount;

    },

    isAirportFull: function ()
    {
        return this.landedPlanes.length > this.defaultAirportCapacity

    },

    // airportCapacity: this.isAirportFull,
    landPlanes: function (planes)
    {
        // if (airportCapacity)
        // {
        //     return this.landedPlanes
        // }
        this.landedPlanes = [...this.landedPlanes, planes]

    },

    removePlanes: function (planes)
    {
        return this.landedPlanes.splice(planes, 1)
    },

    planesExist: function (planes)
    {
        return this.landedPlanes.includes(planes)

    },
}

module.exports = airport;
