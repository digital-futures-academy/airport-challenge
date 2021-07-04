class Airport {
    constructor(name) {
        this._name = name;
        this._airportCapacity = 249; //airport operates a fleet of 249 aircraft
    }

    land(plane) {
        return `${plane._name} plane has just landed.`;
    }   

    airportCapacity(capacity) {
        this._airportCapacity = capacity;
        return `${this._name} airport capacity is now ${this._airportCapacity}`;
    }
}

module.exports = Airport;
