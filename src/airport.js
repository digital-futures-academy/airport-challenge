class Airport {

    constructor() {

        this.planesInAirport = [];
        this.airportCapacity = 10; // default 

    }


    landPlane(plane) {

        // checks 'plane' is a non empty string
        if (typeof plane === 'string' && plane.trim().length > 0 && this.planesInAirport.length < this.airportCapacity) {
            // this.planesInAirport.push(plane);
            this.planesInAirport = [...this.planesInAirport, plane]     // new method 
        }

        else if (this.planesInAirport.length >= this.airportCapacity) { return console.log('Airport is full') }
        else { return console.log('Invalid plane ID') }

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

//important

module.exports = Airport;

