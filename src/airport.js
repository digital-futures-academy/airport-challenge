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
   
    // takeOff() {
    //     return this.location["notInAirport"];
    // }
}

module.exports = Airport;
