let airport = {
    listOfPlanes: [],
    landPlane: function (plane) {
        if (plane?.planeId) {
            this.listOfPlanes.push(plane);
        }
    },
};
module.exports = airport;
