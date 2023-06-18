class Airport {
    #capacity
    #planesList;

    constructor(capacity = 5) {
        this.#capacity = capacity;
        this.#planesList = [];
    }

    landPlane(plane) {
        this.validateLanding(plane);
        this.#planesList.push(plane);
    }

    takeOff(plane) {
        this.validateTakeOff(plane);
        const planeId = plane.getId();
        this.#planesList = this.#planesList.filter((p) => p.getId() !== planeId);
    }

    getPlanesList() {
        return this.#planesList;
    }

    getCapacity() {
        return this.#capacity;
    }

    setCapacity(newCapacity) {
        if (newCapacity < 0) {
            throw new Error(`Capacity cannot be set below 0.`);
        }
        this.#capacity = newCapacity;
    }

    isFull() {
        if (this.#planesList.length < this.#capacity) {
            return false;
        }
        return true;
    }

    isAtAirport(plane) {
        return this.getPlanesList().includes(plane);
    }

    validateLanding(plane) {
        if (this.isFull()) {
            throw new Error(`The airport is full. Cannot land the plane.`)
        }
    }

    validateTakeOff(plane) {
        if (!this.isAtAirport(plane)) {
            throw new Error(`The plane cannot take off as is not at the airport.`);
        }
    }
}

export default Airport;