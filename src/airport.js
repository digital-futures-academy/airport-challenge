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
        if (this.isAirportFull() === false) {
            this.listOfPlanesAtAirport.push(plane);
            //this.listOfPlanesAtAirport = [...this.listOfPlanesAtAirport, plane];
        }

    }

    isAirportFull() {
        return this.airportMaxCapacity === this.listOfPlanesAtAirport.length
    }

    instructToTakeOff() {
        this.listOfPlanesAtAirport.pop();
    }


}

module.exports = {
    Airport,
}