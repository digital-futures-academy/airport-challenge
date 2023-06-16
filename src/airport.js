class Airport {

    airportPlaneList = [];
    airportCapacity = 5;


    landPlane(plane) {
        this.airportPlaneList.push(plane);
    }

    modifyAirportCapacity(newCap) {
        if (Number.isInteger(newCap)) {
            this.airportCapacity = newCap
        }
    }


}

module.exports = Airport