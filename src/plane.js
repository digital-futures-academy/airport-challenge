class Plane {
    id;
    landed;

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