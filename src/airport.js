class Airport {
    constructor(ID) {
        this.ID = ID;
        this.airplanesOnGround = [];
        this.capacity = 10;
    }
    landAirplane(plane, weather) {
        if (this.airplanesOnGround.length < this.capacity && this.airplanesOnGround.includes(plane) === false && weather === false) {
            this.airplanesOnGround.push(plane);
        };
    }
    changeCapacityTo(newCapacity) {
        this.capacity = newCapacity
    };
    notAtCapacity() {
        return this.capacity > this.size.length;
    }
    letAirplaneTakeOff(plane, weather) {
        if (this.airplanesOnGround.includes(plane) && weather === false) {
            this.airplanesOnGround.pop();
        }
    }

}



module.exports = Airport;