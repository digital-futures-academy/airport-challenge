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
        if (this.isAirportFull())
        {
            return `Airport at full capacity`
        }

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
