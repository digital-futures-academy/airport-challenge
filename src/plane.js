class Plane {
    constructor(id, flying = true) {
        this._id = id;
        this._flying = flying;
    }

    get id() {
        return this._id;
    }

    get flying() {
        return this._flying;
    }

    set flying(boolean) {
        this._flying = boolean;
    }
}

module.exports = Plane;
