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
        if (this.checkDuplicate(plane)) {
            console.log("This plane already exists in the airport");
            return true;
        }
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
        if (this.checkDuplicate(plane)) {
            console.log("This plane does not exist in the airport");
            return false;
        }
        for (let i = 0; i < this.planesInAirport.length; i++) {
            if (this.planesInAirport[i].id == plane.id) {
                this.planesInAirport.pop[i];
                return true;
            }
        }
        return false;
    }

    checkDuplicate = plane => {
        for (let i = 0; i < this.planesInAirport.length; i++) {
            if (this.planesInAirport[i].id == plane.id) {
                return true;
            }
        }
    }

}

module.exports = Airport;
