
class Airport {
    constructor() {
        this.listOfLandedPlanes = []; //default empty airport
        this.capacity = 10; //default capacity
        // this._weather = [];
    }

    landAPlane(inputPlaneID) {
        if (this.listOfLandedPlanes.length >= 0) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;

        }

    }


}

module.exports = Airport;