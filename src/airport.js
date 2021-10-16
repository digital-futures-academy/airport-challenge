//const Plane = require("./Plane");
class Airport {

    hanger = [];
    //planeIns = new Plane();

    constructor(airportName, airportCapacity) {
        this.planes = this.hanger;
        this._airportCapacity = airportCapacity;
        this.airportName = airportName;
    }

    get airportCapacity() {
        return this._airportCapacity;
    }

    isAirportFull() {
        if(this.hanger.length >= this.airportCapacity) {
            console.log(`Plane with Reg: ${plane.planeID} cannot land as the Airport is full`);
        }
    }

    landPlane(plane) {
        let airport = new Airport();
        if (plane.isPlaneFlying) {
            if (!airport.isAirportFull()) {
                this.hanger.push(plane);
                return`Land plane with Reg: ${plane.planeID} at the airport `;

            }
            
        } else {
            return 'not flying. so cannot land';
        }
    }


}

module.exports = Airport;