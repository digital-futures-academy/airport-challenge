class Airport {

    constructor() {
        this.listOfPlanesAtAirport = [];
    }

    get getListOfPlanesAtAirport() {
        return this.listOfPlanesAtAirport;
    }

    // Since size of project, I decided a new array with all elements together was best
    // instructToLand(plane) {
    //     // this.listOfPlanesAtAirport = [...this.listOfPlanesAtAirport, 'plane']

    //     this.listOfPlanesAtAirport.push(plane);
    // }

    instructToLand(plane) {
        this.listOfPlanesAtAirport.push(plane);
    }
}

module.exports = {
    Airport,
}