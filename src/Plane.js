class Plane {

    #ID;
    #airport;

    constructor(ID) {
        this.#ID = ID;
    }

    getID() {
        return this.#ID;
    }

    getAirport() {
        return this.#airport;
    }

    setAirport(airport) {
        this.#airport = airport;
    }

}

module.exports = {
    Plane
};