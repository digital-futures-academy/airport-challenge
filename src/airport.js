class Airport {

    constructor() {
        this.listOfPlanesAtAirport = [];
        this.airportMaxCapacity = 2;
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

        this.listOfPlanesAtAirport.push(plane);

    }

    isAirportFull() {
        return this.airportMaxCapacity === this.listOfPlanesAtAirport.length
    }


}

module.exports = {
    Airport,
}