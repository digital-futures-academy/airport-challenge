class Instruction {
    #code;
    #airport;
    #plane;
    #capacityError = new Error('Cannot have negative or no capacity.');
    #fullError = new Error('Airport is full');
    #landError = new Error('Plane already at airport.');
    #takeOffError = new Error('Plane is not at the airport, so cannot take off.');
    #weatherError = new Error('Too stormy to land / take-off');

    constructor(code, airport, plane) {
        this.#code = code;
        this.#airport = airport;
        this.#plane = plane;
    }

    landPlane() {
        if (this.getAirportCapacity() <= this.#airport.planesAtAirport.length) {
            throw this.#fullError;
        }
        if (this.#plane.isLanded() === true) {
            throw this.#landError;
        }
        if (this.#airport.checkWeather() === 'stormy') {
            throw this.#weatherError;
        }
        this.#airport.landPlane(this.#plane);
    }

    takeOffPlane() {
        if (this.#plane.isLanded() === false) {
            throw this.#takeOffError;
        }
        if (this.#airport.checkWeather() === 'stormy') {
            throw this.#weatherError;
        }
        this.#airport.takeOffPlane(this.#plane);
    }

    setAirportCapacity(newCapacity) {
        if (newCapacity <= 0) {
            throw this.#capacityError;
        }
        this.#airport.setAirportCapacity(newCapacity);
    }

    getAirportCapacity() {
        return this.#airport.getAirportCapacity();
    }
}
export default Instruction;