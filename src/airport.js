class Airport {
    airportPlanes;
    airportCapacity = 100;


    constructor() {
        this.airportPlanes = [];
    }

    addPlane(plane) {
        if (plane !== undefined) {
            this.airportPlanes.push(plane);
        }
    }
    changeAirportSize(amount) {
        if (amount >= 1) {
            this.airportCapacity = amount;
        }

    }
}




export default Airport