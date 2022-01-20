class Plane {
    #id;
    #status = 'flying';

    constructor(id) {
        if (typeof id !== 'string')
            throw new Error('Plane cannot be initialised without a string id.');
        this.#id = id;
    }

    #request(airport, method, temp, final, fallback) {
        this.#status = temp;
        try {
            airport[method](this);
            this.#status = final;
        } catch (err) {
            this.#status = fallback;
            throw err;
        }
    }

    land(airport) {
        if (!airport) throw new Error('Cannot land: no destination Airport provided.');
        if (this.status !== 'flying')
            throw new Error('Cannot land: Plane is in incorrect state.');

        this.#request(airport, 'arrive', 'arriving', 'landed', 'flying');
    }

    takeOff(airport) {
        if (!airport) throw new Error('Cannot take off: no departure Airport provided.');
        if (this.status !== 'landed')
            throw new Error('Cannot take off: Plane is in incorrect state.');

        this.#request(airport, 'depart', 'departing', 'flying', 'landed');
    }

    get id() {
        return this.#id;
    }

    get status() {
        return this.#status;
    }
}

module.exports = Plane;
