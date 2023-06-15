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
            //this.listOfPlanesAtAirport.push(plane);
            this.listOfPlanesAtAirport = [...this.listOfPlanesAtAirport, plane];
        }

    }

    isAirportFull() {
        return this.airportMaxCapacity === this.listOfPlanesAtAirport.length
    }

    instructToTakeOff(plane) {




        let arrayElement = this.listOfPlanesAtAirport.findIndex(findPlanes)

        function findPlanes(foundPlane) {
            return foundPlane.getPlaneID() === plane.getPlaneID()
        }



        this.listOfPlanesAtAirport.splice(arrayElement, 1)


        //this.listOfPlanesAtAirport.pop();
    }


}

module.exports = {
    Airport,
}