class Plane {
    tailNumber;

    constructor(tailNumber) {
        this.tailNumber = Math.round(Math.random() * (1000 - 9999) + 9999);
    }

}

//Generates a random tail number between 1000 and 9999 to identify the plain in the Airports array

module.exports = Plane;