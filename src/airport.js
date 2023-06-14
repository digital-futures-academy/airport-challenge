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



}




export default Airport