class Airport {
    constructor(name, full) {
        this._name = name;
        this._airportCapacity = 249; //airport operates a fleet of 249 aircraft
        this._full = full;
    }

    land(plane) {
        if (plane._landed) {
            return `${plane._name} has already landed therefore the request to land it has been denied.`
        }

        if (this._full === false) {
            return `${plane._name} plane has just landed.`;
        } else {
            return `${this._name} airport is full therefore the plane cannot be landed.`;
        }
    }

    airportCapacity(capacity) {
        this._airportCapacity = capacity;
        return `${this._name} airport capacity is now ${this._airportCapacity}.`;
    }

    takenOff(plane) {
        if (plane._atAirport) {
            let firstMessage = `Ryanair airport has received the request to let the ${plane._name} plane take off`;
            let secMessage = 'The plane has left the airport';
            return firstMessage + '\n' + secMessage + '.';
        } else {
            return `${plane._name} is not present at the airport therefore a take off request to ${plane._destination} cannot be sent.`
        }
    }
}

module.exports = Airport;
