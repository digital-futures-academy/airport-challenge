
class Airport {
    constructor(_capacity = 10) {
        this.listOfLandedPlanes = []; //default empty airport
        this._capacity = _capacity;
        // this._weather = [];
    }

    landAPlane(inputPlaneID) {
        if (this.listOfLandedPlanes.length >= 0) {
            if (this.listOfLandedPlanes.length < this._capacity) {
                this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
                // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
                return this.listOfLandedPlanes;
            }
            else {
                const capacityError = new Error('Airport capacity full');
                return capacityError.message;


            }



        }

    }

    changeCapacity(newCapacity) {
        this._capacity = newCapacity
        return this._capacity;
    }


}

module.exports = Airport;