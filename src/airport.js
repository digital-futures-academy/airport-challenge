class Airport {
    airportPlanes;

    constructor() {
        this.airportPlanes = [];
    }

    addPlane(plane) {
        if (plane !== undefined) {
            this.airportPlanes.push(plane);
        }

    }
}




export default Airport