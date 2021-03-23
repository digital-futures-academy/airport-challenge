class Airport {
    constructor(capacity = 2) {
        this.capacity = capacity;
        this.airport = [];

    }
   
    isAirportFull() {
        return (this.airport.length >= this.capacity);
    }

    land(plane) {
        if (!this.isAirportFull()) {
            this.airport.push(plane);
            return this.airport;
        } else {
            return "sorry cannot land plane";
        }
    }
    takeOff(plane) {
        if (!plane.isFlying && this.airport.includes(plane)) {
             this.airport.splice(this.airport.indexOf(plane), 1);
             return 'left airport';
        } else {
            return `sorry ${plane} has already taken off`
        }
        }
        
     }


module.exports = Airport;
