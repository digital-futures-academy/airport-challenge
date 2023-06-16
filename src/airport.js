class Airport {
    stormy;
    airportPlanes;
    airportCapacity = 100;


    constructor() {
        this.airportPlanes = [];
        this.stormy = false;
    }

    addPlane(plane) {
        if (plane !== undefined && !this.isAirportFull() && !this.isAtAirport() && this.stormy === false) {
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
        if (this.isAtAirport(plane) && this.stormy === false) {
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
        if (weather < 0.2) {
            this.stormy = true; return 'It is stormy, Do not land.';
        }
        else {
            return 'The weather is clear, continue landing.';
        }
    }

}




export default Airport