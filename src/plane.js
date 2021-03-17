class Plane {
    constructor(flying = false) {
        this._flying = flying;
    }

    get flying() {
        return this._flying;
    }

    set flying(boolean) {
        this._flying = boolean;
    }
}

module.exports = Plane;
