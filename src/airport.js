const airport = {
    planesStanding: [],
    landPlane: function (plane) {
        if (plane?.id) {
            this.planesStanding.push(plane)
        };
    }
};

module.exports = airport;