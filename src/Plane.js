class Plane {
    #id;
    #airportId;

    constructor(id = 'no id', airportId = 'no airport id') {
        this.#id = id;
        this.#airportId = airportId;
    };

    getId() {
        return this.#id;
    };

    getAirportId() {
        return this.#airportId;
    };

    setAirportId(newId) {
        this.#airportId = newId;
    };

};

module.exports = Plane;