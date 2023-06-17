const airport = {

    landedPlanes: [],
    defaultAirportCapacity: 10,


    modifyAirportCapacity: function (amount)
    {

        this.defaultAirportCapacity = amount;

    },

    isAirportFull: function () 
    {
        return this.landedPlanes.length < this.defaultAirportCapacity

    },

    planesExist: function (planes)
    {
        return this.landedPlanes.includes(planes)

    },
    landPlanes: function (planes)
    {
        if (this.isAirportFull() === false)
        {
            return `Airport at full capacity`
        }
        return this.landedPlanes = [...this.landedPlanes, planes]

    },

    removePlanes: function (planes)
    {
        return this.landedPlanes.splice(planes, 1);
    },

    isPlaneAtAirport: function (planes)
    {
        if (this.planesExist())
        {
            return "This plane is already at airport, It can not be landed.";
        }
        return "This plane is not at the airport.";

    },
}

module.exports = airport;
