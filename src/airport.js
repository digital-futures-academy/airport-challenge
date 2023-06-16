class Airport {
    #airportPlanes = [];

    land(plane) {
        this.#airportPlanes.push(plane);
    }
    getAirportPlaneCount() {
        return this.#airportPlanes.length;
    }
}

export default Airport;