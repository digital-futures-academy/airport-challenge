class Airport {

    planesInAirport;
    planeCapacity;

    constructor(capacity = 3) {

        this.planeCapacity = capacity;
        this.planesInAirport = [];

    }

    isFull = () => {
        if (this.planesInAirport.length >= this.planeCapacity) {
            return true;
        }
        else {
            return false;
        }
    }

    landPlane = plane => {
        if (this.isFull()) {
            console.log("The airport is full so it cannot land another plane");
            return true;
        }
        else {
            this.planesInAirport.push(plane);
            return false;
        }

    }

    removePlane = plane => {

        for (let i = 0; i < this.planesInAirport.length; i++) {
            if (this.planesInAirport[i].id == plane.id) {
                this.planesInAirport.pop[i];
                return true;
            }
        }
        return false;
    }

}

module.exports = Airport;
