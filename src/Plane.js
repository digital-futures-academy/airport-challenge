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

export default Plane;

// module.exports = {
//     Plane
// };