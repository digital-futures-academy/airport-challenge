class Plane {
    listOfIds = true;

    addPlaneId() {
        return this.listOfIds;
    }
    constructor(planeID) {
        this.planeID = planeID;
    }
}

const plane0 = new Plane(`plane0`);
const plane1 = new Plane(`plane1`);
const plane2 = new Plane(`plane2`);

totalPlanes = [plane0, plane1, plane2];

console.log(totalPlanes);


module.exports = Plane;



