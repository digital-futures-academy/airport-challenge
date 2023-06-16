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


}

module.exports = Airport 
