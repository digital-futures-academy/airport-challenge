class Airport {
    #name;
    #planesInPort;
    #maxCapacity

    constructor(name, planesInPort = [], capacity = 3) {
        this.#name = name;
        this.#planesInPort = planesInPort;
        this.#maxCapacity = capacity;
    }

    getPlanesInPort() {
        return this.#planesInPort;
    }

    getPlaneNum() {
        return this.#planesInPort.length;
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    landNewPlane(planeName) {
        this.#planesInPort.push(planeName);
    }

    changeCapacity(number) {
        if (typeof number === 'number') {
            this.#maxCapacity = number
        }
    }

    isAirportFull() {
        return this.getMaxCapacity() === this.getPlaneNum();

    }
}
module.exports = Airport