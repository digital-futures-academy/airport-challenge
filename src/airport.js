class Airport {
    constructor() {
        this.airport = [];

    }
   
    // isAirportFull() {
    //     if (this.currentCapacity >= this.defaultCapacity) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // changeDefaultCapacity(capacity) {
    //     this.defaultCapacity = capacity;
    //     return this.defaultCapacity;
    // }
    land(plane) {
        this.airport.push(plane);
        return this.airport;
    }
   
    // takeOff() {
    //     return this.location["notInAirport"];
    // }
}

module.exports = Airport;
