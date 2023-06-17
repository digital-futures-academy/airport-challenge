class Airport {

    constructor() {

        this.planesInAirport = [];
        this.airportCapacity = 10; // default 

    }


    landPlane(plane) {

        if (this.isAirportFull()) {        //checks airport is not full
            return console.log('Airport is full')
        }

        if (this.checkAirport(plane)) { return console.log('Plane has already landed') }          //checks plane doesn't already exist


        if (this.validID(plane)) {  // checks plane is a valid string
            this.planesInAirport = [...this.planesInAirport, plane]
        }
        else {
            return console.log('Invalid ID ')
        }


    }


    checkAirport(plane) {

        if (this.planesInAirport.includes(plane)) {
            return true
        }
        else { return false }
    }



    validID(plane) {
        if (typeof plane === 'string' && plane.trim().length > 0) {
            return true
        }
        else { return false }

    }




    adjustAirportCapacity(capacity) {
        if (Number.isInteger(capacity) && capacity > 0) {
            this.airportCapacity = capacity;
        }

    }




    isAirportFull() {
        if (this.planesInAirport.length < this.airportCapacity) {
            return false
        }
        else { return true }

    }





    takeoffPlane(plane) {
        if (this.planesInAirport.includes(plane)) {
            let planeIndex = this.planesInAirport.indexOf(plane) //finds position
            return this.planesInAirport.splice(planeIndex, 1)

            // return this.planesInAirport

        } else {
            return 'Plane does not exist in airport'
        }

    }

}


module.exports = Airport;

