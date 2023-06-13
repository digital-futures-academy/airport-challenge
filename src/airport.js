// const airport = {
//     landNewPlane: function () { this.landedPlanes.push(`newPlane`) },
//     landedPlanes: [],
// };

// module.exports = airport;

//Code refactored below to use class syntax:

class Airport {
    #name;
    #planesInPort;
    #maxCapacity

    constructor(name, planesInPort = [], capacity = 3) {
        this.#name = name;
        this.#planesInPort = [];
        this.#maxCapacity = capacity;
    }

    getPlanesInPort() {
        return this.#planesInPort;
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
        };

    }
}
module.exports = Airport