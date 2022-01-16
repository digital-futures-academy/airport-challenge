class Plane {
    constructor(id) {
        if (typeof id !== 'string')
            throw new Error('Plane cannot be initialised without a string id.');
        this._id = id;
        this._status = 'flying';
    }

    _request(airport, method, temp, final, fallback) {
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
        if (!airport) throw new Error('Cannot land: no destination Airport provided.');
        if (this.status !== 'flying')
            throw new Error('Cannot land: Plane is in incorrect state.');

        this._request(airport, 'arrive', 'arriving', 'landed', 'flying');
    }

    takeOff(airport) {
        if (!airport) throw new Error('Cannot take off: no departure Airport provided.');
        if (this.status !== 'landed')
            throw new Error('Cannot take off: Plane is in incorrect state.');

        this._request(airport, 'depart', 'departing', 'flying', 'landed');
    }

    get id() {
        return this._id;
    }

    get status() {
        return this._status;
    }
}

module.exports = Plane;
