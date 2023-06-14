const airport = {
    landedPlanes: [],

    landPlanes: function (planes)
    {
        this.landedPlanes = [...this.landedPlanes, planes]
    },


}

module.exports = airport;
