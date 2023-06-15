const airport = {
    landedPlanes: [],
    defaultAirportCapacity: 10,


    modifyAirportCapacity: function (amount)
    {

        this.defaultAirportCapacity = amount;

    },

    isAirportFull: function ()
    {
        return this.landedPlanes.length > this.defaultAirportCapacity

    },

    landPlanes: function (planes)
    {
        if (this.isAirportFull)
        {
            return this.landedPlanes
        }
        this.landedPlanes = [...this.landedPlanes, planes]

    },

}

module.exports = airport;
