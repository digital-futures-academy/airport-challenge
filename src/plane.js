class Plane {
    tailNumber;

    constructor(tailNumber) {
        this.tailNumber = Math.round(Math.random() * (1000 - 9999) + 9999);
    }

}

module.exports = Plane;