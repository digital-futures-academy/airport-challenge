class Plane {
    constructor() {
        // A variable to store whether the plane is flying or landed.
        this.state = `flying`;
    }

    // A function to change the state of the plane instance to landed.
    land = () => {
        this.state = `landed`; // change the state of the plane to landed.
        return `plane landed` // return a string to act as an output that the plane's state was successfully changed
    }
}

module.exports = {
    Plane: Plane
}