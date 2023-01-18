const Airport = require("./airport");
const airport = new Airport
class Plane {
    tailNumber;

    constructor(tailNumber) {
        this.tailNumber = Math.round(Math.random() * (1000 - 9999) + 9999);
    }

    //addPlane(tailNumber) {
    // if (Airport.slotsOccupied.length === 10) {
    // return
    // } else {
    //    this.slotsOccupied.push(tailNumber instanceof Plane)
    //  }
    // }

    removePlane(tailNumber) {
        if (tailNumber instanceof Plane) this.slotsOccupied.pull(tailNumber)
    }
}
console.log(airport.slotsOccupied.length === 1)
module.exports = Plane;