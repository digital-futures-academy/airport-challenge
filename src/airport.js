// const airport = {
//     landNewPlane: function () { this.landedPlanes.push(`newPlane`) },
//     landedPlanes: [],
// };

// module.exports = airport;

//Code refactored below to use class syntax:

class Airport {
    #name;
    #planesInPort;

    constructor(name, planesInPort = []) {
        this.#name = name;
        this.#planesInPort = [];
    }

    getPlanesInPort() {
        return this.#planesInPort;
    }

    landNewPlane(planeName) {
        this.#planesInPort.push(planeName);
    }
}
module.exports = Airport