class Instruction {
    #code;
    #airport;
    #plane;
    constructor(code, airport, plane) {
        this.#code = code;
        this.#airport = airport;
        this.#plane = plane;
    }
    landPlane() {
        this.#airport.landPlane(this.#plane);
    }
}
export default Instruction;