class Plane {

    planeId;
    groundedIn;

    constructor(planeId = `plane1`) {
        this.planeId = planeId;
    }

    setGroundedIn(airport = `factory`) {
        this.groundedIn = airport;
    }
}

module.exports = Plane;