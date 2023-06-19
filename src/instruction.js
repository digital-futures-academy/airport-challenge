class Instruction {
    #code;
    #airport;
    #plane;
    #capacityError = new Error('Cannot have negative capacity.')
    constructor(code, airport, plane) {
        this.#code = code;
        this.#airport = airport;
        this.#plane = plane;
    }

    landPlane() {
        this.#airport.landPlane(this.#plane);
    }

    setAirportCapacity(newCapacity) {
        if (newCapacity < 0) {
            throw this.#capacityError;
        }
        this.#airport.setAirportCapacity(newCapacity);
    }
}
export default Instruction;