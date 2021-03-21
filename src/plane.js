class Plane {
    constructor(id, flying = true, _inAirport = false) {
        this._id = id;
        this._flying = flying;
        this._inAirport = _inAirport;
    }

    get id() {
        return this._id;
    }

    get flying() {
        return this._flying;
    }

    get inAirport() {
        return this._inAirport;
    }

    land() {
        this._flying = false;
        this.addToAirport();
        return this._flying;
    }

    takeOff() {
        this._flying = true;
        this.removeFromAirport();
        return this._flying;
    }

    addToAirport() {
        if(this._flying) return `Cannot add to hangar, ${this._id} is currently in the air`;
        this._inAirport = true;
        return this._inAirport;
    }

    removeFromAirport() {
        if(!this._flying) return `Cannot remove from hangar, ${this._id} is still grounded`;
        this._inAirport = false;
        return this._inAirport;
    }
}

module.exports = Plane;
