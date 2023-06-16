class Airport {

    constructor(airportID) {
        this.airportID = airportID;
        this.listOfPlanesAtAirport = [];
        this.airportMaxCapacity = 2;
    }

    get getAirportID() {
        return this.airportID;
    }

    get getListOfPlanesAtAirport() {
        return this.listOfPlanesAtAirport;
    }

    get getAirportMaxCapacity() {
        return this.airportMaxCapacity;
    }

    setAirportMaxCapacity(newCapacity) {
        this.airportMaxCapacity = newCapacity;
    }


    instructToLand(plane) {
        if (this.preLandChecks(plane)) {
            this.listOfPlanesAtAirport = [...this.listOfPlanesAtAirport, plane];
            plane.setInFlight(false)
        }

    }

    isAirportFull() {
        return this.airportMaxCapacity === this.listOfPlanesAtAirport.length
    }

    // instructToTakeOff(plane) {

    //     let arrayElement = this.listOfPlanesAtAirport.findIndex(findPlanes);

    //     function findPlanes(foundPlane) {
    //         return foundPlane.getPlaneID() === plane.getPlaneID()
    //     }

    //     this.listOfPlanesAtAirport.splice(arrayElement, 1)

    //     //this.listOfPlanesAtAirport.pop();
    // }

    instructToTakeOff2(plane) {

        this.listOfPlanesAtAirport = this.listOfPlanesAtAirport.filter(findPlanes);

        function findPlanes(foundPlane) {
            if (foundPlane?.getPlaneID() != plane?.getPlaneID()) {
                return foundPlane
            } else {
                plane.setInFlight(true)
            }

        }

    }

    checkPlaneAtAirport(plane) {
        return this.listOfPlanesAtAirport.some(planesInAirportList => planesInAirportList?.planeID === plane?.planeID);
    }

    preLandChecks(plane) {
        return !this?.isAirportFull() && plane?.inFlight && !this.checkPlaneAtAirport(plane)
    }

    numberOfPlanesAtAirport() {
        return this.getListOfPlanesAtAirport.length
    }


}



module.exports = {
    Airport,
}