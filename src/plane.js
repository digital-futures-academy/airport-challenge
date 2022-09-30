class Plane {
    id;
    landed;
    airport;

    getID = () => {
        return this.id
    };

    isLanded = () => {
        return this.landed;
    }
};

module.exports = {
    Plane
};