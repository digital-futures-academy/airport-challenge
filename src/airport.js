class Airport {
    stormy;
    airportPlanes;
    airportCapacity = 100;


    constructor() {
        this.airportPlanes = [];
        this.stormy = false;
    }

    addPlane(plane) {
        if (plane !== undefined && !this.isAirportFull() && !this.isAtAirport()) {
            this.airportPlanes.push(plane);
        }
    }

    changeAirportSize(amount) {
        if (amount >= 1) {
            this.airportCapacity = amount;
        }
    }
    isAirportFull() {
        return this.airportCapacity === this.airportPlanes.length;
    }
    takeOff(plane) {
        if (this.isAtAirport(plane)) {
            let index = this.airportPlanes.indexOf(plane);
            if (index !== -1) {
                this.airportPlanes.splice(index, 1);
                return plane;
            }
        }
    }
    isAtAirport(plane) {
        let index = this.airportPlanes.indexOf(plane);
        if (index !== -1) {
            return true;
        } else {
            return false;
        }
    }
    isStormy() {
        let weather = Math.random();
        if (weather < 0.5) {
            this.stormy = true
        }
    }

}




export default Airport