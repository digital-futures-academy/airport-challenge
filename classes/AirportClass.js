
class Airport {
    constructor(_capacity = 10) {
        this.listOfLandedPlanes = []; //default empty airport
        this._capacity = _capacity;
        // this._weather = [];
    }

    landAPlane(inputPlaneID) {
        let message;
        if (this.listOfLandedPlanes.length === 0) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        else if (this.listOfLandedPlanes.includes(inputPlaneID)) {
            message = `${inputPlaneID} has already landed!`;
            return message;
        }

        else if (this.listOfLandedPlanes.length < this._capacity) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        else {
            const capacityError = new Error('Airport capacity full');
            message = capacityError.message;
            return message;
        }

    }

    changeCapacity(newCapacity) {
        this._capacity = newCapacity;
        return this._capacity;
    }

    takeOffPlane(inputPlaneID) {
        // looping through listOfLandedPlanes to find index of inputPlaneID
        let indexNumber = this.listOfLandedPlanes.findIndex((currentLandedPlaneID) => {
            return currentLandedPlaneID === inputPlaneID;
        });

        if (indexNumber === -1) {
            let message = `${inputPlaneID} cannot Take Off as it is not currently in landed list of planes in the airport`;
            return message;
        }
        else {
            this.listOfLandedPlanes.splice(indexNumber, 1);
            let message = `${inputPlaneID} has Taken Off! and ${inputPlaneID} is no longer in the airport!`;
            return message;
        }




    }
}

module.exports = Airport;