class Airport {
    #planesList;

    constructor() {
        this.#planesList = [];
    }

    landPlane(plane) {
        this.#planesList.push(plane);
    }

    getPlanesList() {
        return this.#planesList
    }
}

export default Airport;