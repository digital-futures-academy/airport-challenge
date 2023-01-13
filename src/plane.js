class Plane {
    tailNumber;

    constructor(tailNumber) {
        this.tailNumber = Math.random() * 100
    }

}

console.log(Plane.tailNumber);

module.exports = Plane;