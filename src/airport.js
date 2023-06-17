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

    validateLanding(plane) {
        if (this.isFull()) {
            throw new Error(`The airport is full. Cannot land the plane.`)
        }
    }
}

export default Airport;