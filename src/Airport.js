



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
            this.listOfLandedPlanes.forEach(eachLandedPlaneID => {
                if (eachLandedPlaneID === inputPlaneID) {
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







}

module.exports = {
    AIRPORT
};