class Instruction {
    #code;
    #airport;
    #plane;
    #capacityError = new Error('Error setting a new capacity.')
    constructor(code, airport, plane) {
        this.#code = code;
        this.#airport = airport;
        this.#plane = plane;
    }

    landPlane() {
        this.#airport.landPlane(this.#plane);
    }

    setAirportCapacity(newCapacity) {
        if ()
            this.#airport.setAirportCapacity(newCapacity);
    }
}
export default Instruction;