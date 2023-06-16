class Airport {
    #airportPlanes = [];
    #defaultCapacity = 5;

    land(plane) {
        if (this.airportIsFull()) {
            return this.#airportPlanes.length;
        }
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

    airportIsFull() {
        if (this.#airportPlanes.length < this.#defaultCapacity) {
            return false;
        }
        return true;
    }

    takeOff(plane) {
        const indexPlane = this.#airportPlanes.indexOf(plane);
        this.#airportPlanes.splice(indexPlane, 1);
        if (!this.takeOffValidator() || !this.isPlaneAtAirport) {
            throw new Error("You cannot take off a plane when the airport has 0 planes on land or the plane id is not at the airport.");
        }
    }

    isPlaneAtAirport(plane) {
        return this.#airportPlanes.includes(plane);
    }

    takeOffValidator() {
        if (this.#airportPlanes.length > 0) {
            return true;
        }
        return false;
    }
}

export default Airport;