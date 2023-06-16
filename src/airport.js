class Airport {

    airportPlaneList = [];
    airportCapacity = 5;
    landingError = new Error(`Landing Error`);
    takeOffError = new Error(`Cannot take off`)


    landPlane(plane) {
        if (this.planeInAirport(plane) || this.isAirportFull() === true) {
            throw this.landingError;
        } else {
            this.airportPlaneList.push(plane);
        }
    }

    modifyAirportCapacity(newCap) {
        if (Number.isInteger(newCap)) {
            this.airportCapacity = newCap;
        }
    }

    isAirportFull() {
        return this.airportPlaneList.length >= this.airportCapacity ? true : false;
    }

    planeInAirport(plane) {
        return this.airportPlaneList.includes(plane);
    }

    takeOff(plane) {
        if (this.airportPlaneList.includes(plane)) {
            let planeIndex = this.airportPlaneList.indexOf(plane);
            this.airportPlaneList.splice(planeIndex, 1);
        } else {
            throw this.takeOffError;
        }
    }



}

module.exports = Airport 
