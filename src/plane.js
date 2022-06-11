class Plane {
    constructor(planeID) {
        this.planeID = planeID;
    }
}




const plane1 = new Plane(`pl001`);
const plane2 = new Plane(`pl002`);
const plane3 = new Plane(`pl003`);


module.exports = Plane;