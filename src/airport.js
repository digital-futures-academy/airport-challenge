class Airport {

    constructor() {
        this.listOfPlanesAtAirport = [];
    }

    getListOfPlanesAtAirport() {
        return this.listOfPlanesAtAirport
    }


    // Since size of project, I decided a new array with all elements together was best
    instructPlaneToLand(plane) {
        this.listOfPlanesAtAirport = [...listOfPlanesAtAirport, plane]
    }
}

module.exports = {
    Airport,
}