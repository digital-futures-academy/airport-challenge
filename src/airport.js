
class Airport {

    hanger = [];

    constructor() {
        this.planes = this.hanger;
    }

    landPlane(plane) {
        if (plane.isPlaneFlying) {
            this.hanger.push(plane);
            //console.log(`Land plane with Reg: ${plane.planeID} at the airport `);
            //console.log(`Plane Flying = ${plane.isPlaneFlying}`);
            return `Land plane with Reg: ${plane.planeID} at the airport `;
        } else {
            return 'not flying. so cannot land';
        }
    }
}

module.exports = Airport;