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

    landPlane(plane, weather) {
        if (plane.isPlaneFlying) { 
            if (weather.getWeatherStatus() === 'Sunny') {
                console.log('Weather is Sunny. Proceed for landing');
                if (!this.isAirportFull()) {
                    if(plane.landed()) {
                        if(!this.noOfPlanes.includes(plane.planeID)) {
                            this.noOfPlanes.push(plane.planeID);
                            console.log(`Land plane with Reg: ${plane.planeID} at the airport `);
                        } else {
                            console.log(`Plane with Reg: ${plane.planeID} has already landed`);
                        }
                    }
                } else {
                    console.log(`Plane with Reg: ${plane.planeID} cannot land as the Airport is full`);
                }
            } else {
                //console.log('Weather is stormy');
                console.log(`Plane with Reg: ${plane.planeID} cannot land as the weather is stormy`);
            }
        } else {
            console.log('Not flying. so cannot land');
        }
    }

    takeOff(plane, weather) {
        if (plane.landed()) {
            if(!this.noOfPlanes.includes(plane.planeID)) {
                console.log(`${plane.planeID}, Has already taken off or still flying`);
            }else {
                let rand = this.noOfPlanes[Math.floor(Math.random()*this.noOfPlanes.length)];
                let getIndex = this.noOfPlanes.indexOf(rand);
                if (weather.getWeatherStatus() === 'Sunny') {
                    console.log(`Plane with Reg: ${rand} Weather is Sunny. Proceed for takeoff`);
                    let takenOffPlaneID = this.noOfPlanes.splice(getIndex, 1);
                    console.log(`Airport confirmation: Plane with Reg: ${takenOffPlaneID} has taken off and is no longer at the airport`);
                } else {
                    console.log(`Plane with Reg: ${rand} Weather is stormy. Do not proceed for takeoff`);
                    //return `Plane with Reg: ${rand} Weather is stormy. Do not proceed for takeoff`;
                }
            }
        } 
    }
}

module.exports = Airport;