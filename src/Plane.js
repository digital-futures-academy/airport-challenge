class Plane {

    landed = false;

    constructor(id = -1) {
        this.id = id;
    }

    land = () => { this.landed = true };
    takeOff = () => { this.landed = false };
};

module.exports = Plane;