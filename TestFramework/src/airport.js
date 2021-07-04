class Airport {
    constructor(name, full) {
        this._name = name;
        this._airportCapacity = 249; //airport operates a fleet of 249 aircraft
        this._full = full;
    }

    land(plane) {
        if (this._full === false) {
            return `${plane._name} plane has just landed.`;
        } else {
            return `${this._name} airport is full therefore the plane cannot be landed.`;
        }
    }   

    airportCapacity(capacity) {
        this._airportCapacity = capacity;
        return `${this._name} airport capacity is now ${this._airportCapacity}`;
    }
}

module.exports = Airport;
