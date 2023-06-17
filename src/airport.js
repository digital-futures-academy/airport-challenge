class Airport {

    constructor() {

        this.planesInAirport = [];
        this.airportCapacity = 10; // default 

    }


    landPlane(plane) {

        // this.checkAirport(plane)



        // // checks 'plane' is a non empty string
        // // if (typeof plane === 'string' && plane.trim().length > 0 && this.planesInAirport.length < this.airportCapacity) {
        // //     // this.planesInAirport.push(plane);
        // //     this.planesInAirport = [...this.planesInAirport, plane]     // new method 
        // // }
        // if (this.planesInAirport.includes(plane) === false) {
        //     return ('Not acceptable plane ID')
        // }
        // else if (this.planesInAirport.length >= this.airportCapacity) {
        //     return console.log('Airport is full')
        // }



        if (this.isAirportFull()) {        //checks airport is not full
            return console.log('Airport is full')
        }

        if (this.checkAirport(plane)) { return console.log('Plane has already landed') }          //checks plane doesn't already exist


        if (this.validID(plane)) {
            this.planesInAirport = [...this.planesInAirport, plane]
        }
        else {
            return console.log('Invalid ID ')
        }


    }


    checkAirport(plane) {
        // if (this.planesInAirport.includes(plane)) {
        //     return console.log('Plane has already been landed')
        // }
        // else if (typeof plane === 'string' && plane.trim().length > 0 && this.planesInAirport.length < this.airportCapacity) {
        //     // this.planesInAirport.push(plane);
        //     this.planesInAirport = [...this.planesInAirport, plane]     // new method 
        // }
        // // else { return console.log('Invalid Plane ID') }


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

//important

module.exports = Airport;

