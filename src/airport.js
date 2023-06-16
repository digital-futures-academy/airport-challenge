class Airport {

    airportPlaneList = [];
    airportCapacity = 5;
    landingError = new Error(`Airport is at capacity`);


    landPlane(plane) {
        if (this.isAirportFull() === false) {
            this.airportPlaneList.push(plane);
        } else {
            throw this.landingError;
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

    takeOff(plane) {
        let planeIndex = this.airportPlaneList.indexOf(plane);
        this.airportPlaneList.splice(planeIndex, 1);
    }

    planeInAirport(plane) {
        if (this.airportPlaneList.includes(plane)) return true;
    }


}

module.exports = Airport 
