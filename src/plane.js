class Plane {
    constructor(id) {
        if (typeof id !== 'string')
            throw new Error('Plane must be initialised with an id.');
        this._id = id;
        this._status = 'flying';
    }

    _instruct(airport, method, temp, final, fallback) {
        this._status = temp;
        try {
            airport[method](this);
            this._status = final;
        } catch (err) {
            this._status = fallback;
            throw err;
        }
    }

    land(airport) {
        if (!airport) throw new Error('Cannot land without a destination airport.');
        if (this.status !== 'flying')
            throw new Error('Cannot land if status is not flying.');

        this._instruct(airport, 'arrive', 'arriving', 'landed', 'flying');
    }

    takeOff(airport) {
        if (!airport) throw new Error('Cannot take off without a departure airport.');
        if (this.status !== 'landed')
            throw new Error('Cannot take off if status is not landed.');

        this._instruct(airport, 'depart', 'departing', 'flying', 'landed');
    }

    get id() {
        return this._id;
    }

    get status() {
        return this._status;
    }
}

module.exports = Plane;
