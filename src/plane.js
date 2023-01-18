const Airport = require("./airport");
const airport = Airport

class Plane {
    tailNumber;

    constructor(tailNumber) {
        this.tailNumber = Math.round(Math.random() * (1000 - 9999) + 9999);
    }

    addPlane(tailNumber) {
        if (this.airport.slotsOccupied.length === 10) {
            return
        } else {
            this.slotsOccupied.push(tailNumber instanceof Plane)
        }
    }

    removePlane(tailNumber) {
        if (tailNumber instanceof Plane) this.slotsOccupied.pull(tailNumber)
    }
}

module.exports = Plane;