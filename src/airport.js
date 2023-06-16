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

    setCapacity(newCapacity) {
        if (newCapacity <= 0) {
            throw new Error("This capacity is not valid. Airport capacity cannot be smaller than 1.");
        }
        this.#defaultCapacity = newCapacity;
    }
}

export default Airport;