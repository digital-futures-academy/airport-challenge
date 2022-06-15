//class to create planes instances that can land on or take off from airport

class Plane {
    constructor(planeID) {
        this.planeID = planeID;
        // this.addPlanesInList(planeID)
    }

    // addPlanesInList(planeID) {
    //     listOfPlanes = [];
    //     listOfPlanes.push(planeID);
    //     // listOfPlanes = [...listOfPlanes, planeID]
    // }
    // randomPlane() {
    //     let key = Math.floor(Math.random() * this.listOfPlanes.length);
    //     return this.listOfPlanes[key];
    // }
}

// const plane1 = new Plane(`pl002`);
// const plane2 = new Plane(`pl004`);
// const plane3 = new Plane(`pl006`);

// plane1.addPlanesInList();
// console.log(plane1.listOfPlanes);
// console.log(plane2.listOfPlanes);
// console.log(Plane);





module.exports = Plane;