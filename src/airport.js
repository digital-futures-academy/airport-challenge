class Airport {

    constructor(airportID) {
        this.airportID = airportID;
        this.listOfPlanesAtAirport = [];
        this.airportMaxCapacity = 2;
        this.weatherSafeForAction = true;
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
        if (newCapacity >= this.numberOfPlanesAtAirport() && typeof newCapacity === 'number' && newCapacity >= 0) {
            this.airportMaxCapacity = newCapacity
        }

    }


    instructToLand(plane) {

        if (this.preLandChecks(plane)) {
            this.listOfPlanesAtAirport = [...this.listOfPlanesAtAirport, plane];
            plane.setInFlight(false);
        }

    }

    isAirportFull() {
        return this.airportMaxCapacity === this.getListOfPlanesAtAirport.length;
    }

    instructToTakeOff2(plane) {

        if (this.preTakeOffChecks(plane)) {

            this.listOfPlanesAtAirport = this.listOfPlanesAtAirport.filter(findPlanes);

            function findPlanes(foundPlane) {
                if (foundPlane?.getPlaneID() != plane?.getPlaneID()) {
                    return foundPlane
                } else {
                    plane.setInFlight(true)
                }

            }
        }

    }

    checkPlaneAtAirport(plane) {
        return this.listOfPlanesAtAirport.some(planesInAirportList => planesInAirportList?.planeID === plane?.planeID);
    }

    preLandChecks(plane) {
        return (this.getWeatherSafeForAction() && !this?.isAirportFull() && !this.checkPlaneAtAirport(plane) && plane?.inFlight)
    }

    preTakeOffChecks(plane) {
        return this.getWeatherSafeForAction() && !plane?.inFlight
    }

    numberOfPlanesAtAirport() {
        return this.getListOfPlanesAtAirport.length
    }

    getWeatherSafeForAction() {
        return this.weatherSafeForAction
    }

    // required for test as random number generator is not predictable. However can be use to set manually or as a result of generator output
    // i.e over x amount send true, otherwise false

    setWeatherSafeForAction(boolInput) {
        this.weatherSafeForAction = boolInput;
    }

    // Over 2 is considered 'Sunny' for the scenario purposes. Keep values low so 'Stormy' / false could be returned a realistic amount to see during runtime

    static weatherGenerator() {

        return (Math.floor(Math.random() * 5) > 2) ? true : false;

    }


}



module.exports = {
    Airport,
}