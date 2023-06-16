class Airport {
    #airportPlanes = [];
    #defaultCapacity = 5;

    land(plane) {
        this.#airportPlanes.push(plane);
    }
    getAirportPlaneCount() {
        return this.#airportPlanes.length;
    }

    getCapacity() {
        return this.#defaultCapacity;
    }
}

export default Airport;