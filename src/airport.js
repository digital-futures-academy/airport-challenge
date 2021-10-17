class Airport {

    constructor(airportName, airportCapacity) {
        this._noOfPlanes = [];
        this._airportCapacity = airportCapacity;
        this.airportName = airportName;
    }

    get airportCapacity() {
        return this._airportCapacity;
    }

    get noOfPlanes() {
        return this._noOfPlanes;
    }

    isAirportFull() {
        if(this.noOfPlanes.length >= this.airportCapacity) {
            return true;
        }
    }

    landPlane(plane) {
        if (plane.isPlaneFlying) {
            if (!this.isAirportFull()) {
                if(plane.landed()) {
                    if(!this.noOfPlanes.includes(plane.planeID)) {
                        this.noOfPlanes.push(plane.planeID);
                        return`Land plane with Reg: ${plane.planeID} at the airport `;
                    } else {
                        console.log(`Plane with Reg: ${plane.planeID} has already landed`);
                    }
                }
            } else {
                console.log(`Plane with Reg: ${plane.planeID} cannot land as the Airport is full`);
            }
        } else {
            return 'Not flying. so cannot land';
        }
    }

    takeOff(plane) {
        if (plane.landed()) {
            let rand = this.noOfPlanes[Math.floor(Math.random()*this.noOfPlanes.length)];
            let getIndex = this.noOfPlanes.indexOf(rand);
            let takenOff = this.noOfPlanes.splice(getIndex, 1);
            console.log(`${takenOff} has taken off and is no longer at the airport`);
        }
    }
}

module.exports = Airport;