// const { Airport } = require("./airport");

class Plane {
    constructor(planeID) {
        this.planeID = planeID;
    }
}




const plane1 = new Plane(`pl001`);
const plane2 = new Plane(`pl002`);
const plane3 = new Plane(`pl003`);
const plane4 = new Plane(`pl004`);
const plane5 = new Plane(`pl005`);


module.exports = Plane;