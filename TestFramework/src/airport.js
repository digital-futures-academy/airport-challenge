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

    takenOff(plane) {
        let firstMessage = `Ryanair airport has received the request to let the ${plane._name} plane take off`;
        let secMessage = 'The plane has left the airport';
        return firstMessage + '\n' + secMessage;
    }
}

module.exports = Airport;
