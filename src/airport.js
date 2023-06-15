class Airport {
    constructor(ID) {
        this.ID = ID;
        this.airplanesOnGround = [];
        this.capacity = 10;
        this.lastAirplaneTakenOff = String;
    }
    landAirplane(plane) {
        if (this.airplanesOnGround.length < this.capacity) {
            this.airplanesOnGround.push(plane);
        };
    }
    changeCapacityTo(newCapacity) {
        this.capacity = newCapacity
    };
    notAtCapacity() {
        return this.capacity > this.size.length;
    }
    letAirplaneTakeOff() {
        this.lastAirplaneTakenOff = this.airplanesOnGround.shift();
    }

}



module.exports = Airport;