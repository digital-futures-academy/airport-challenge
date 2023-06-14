class Airport {
    airportPlanes;
    airportCapacity = 100;


    constructor() {
        this.airportPlanes = [];
    }

    addPlane(plane) {
        if (plane !== undefined && this.isAirportFull !== this.airportCapacity) {
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
        let index = this.airportPlanes.indexOf(plane);
        if (index !== -1) {
            this.airportPlanes.splice(index, 1);
            return plane;
        }
    }
}



export default Airport