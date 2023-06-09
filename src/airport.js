const airport = {
    planesStanding: [],
    landPlane: function (plane) {
        this.planesStanding.push(plane);
    }
};

module.exports = airport;