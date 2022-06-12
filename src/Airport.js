



class AIRPORT {

    constructor() {
        this.capacity = 10; //default capacity
        this.listOfLandedPlanes = []; //empty airport
    }


    landAPlane(inputPlaneID) {
        // for test 1 user story 1
        if (this.listOfLandedPlanes.length === 0) {

            this.listOfLandedPlanes.push(inputPlaneID);

            console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);

            return this.listOfLandedPlanes.length;
        }

        //for test 3 user story 3
        else if (this.listOfLandedPlanes.length === this.capacity) {

            let message = `Airport Capacity FULL, cannot instruct ${inputPlaneID} to land!`;

            return (message);
        }


        // for test 2
        //if airport already has few planes landed
        else if (this.listOfLandedPlanes.length > 0) {
            //loops through landed plane's list to check if the landing plane already in it
            this.listOfLandedPlanes.forEach(currentLandedPlaneID => {
                if (currentLandedPlaneID === inputPlaneID) {
                    return console.log(`${inputPlaneID} has already landed!`);
                }
            });
            // if a new plane then push it into listOfLandedPlanes array
            this.listOfLandedPlanes.push(inputPlaneID);
            console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes.length;
        }

        else {
            // log for test purposes
            return console.log('incorrect code ');
        }

    }


    changeAirportCapacity(newCapacityNumber) {
        this.capacity = newCapacityNumber;
        let message = `Capacity changed to ${this.capacity}!`;
        return message;
    }

    takeOffPlane(inputPlaneID) {

        let indexNumber = this.listOfLandedPlanes.findIndex((currentLandedPlaneID) => {
            return currentLandedPlaneID == inputPlaneID;
        });

        if (indexNumber === -1) {
            let message = `${inputPlaneID} cannot Take Off as it is not currently in landed in the airport`;
            return message;
        }
        else {
            this.listOfLandedPlanes.splice(indexNumber, 1);
            let message = `${inputPlaneID} has Taken Off! and ${inputPlaneID} is no longer in the airport!`;
            return message;
        }
    }




}


module.exports = {
    AIRPORT
};