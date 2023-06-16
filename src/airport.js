class Airport {
    constructor(ID) {
        this.ID = ID;
        this.airplanesOnGround = [];
        this.capacity = 10;
        this.lastAirplaneTakenOff = 'thisisnotworking';
    }
    landAirplane(plane) {
        if (this.airplanesOnGround.length < this.capacity && this.airplanesOnGround.includes(plane) === false) {
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
        if (this.airplanesOnGround.includes()) {
            this.airplanesOnGround.pop();
        }
    }

}



module.exports = Airport;