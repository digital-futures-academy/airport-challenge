
class Airport {
    constructor(capacity = 10) {
        this.listOfLandedPlanes = []; //default empty airport
        // this._weather = [];
    }

    landAPlane(inputPlaneID) {
        if (this.listOfLandedPlanes.length >= 0) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;

        }

    }

    changeCapacity(newCapacity) {
        this.capacity = newCapacity;
        return this.capacity;
    }


}

module.exports = Airport;