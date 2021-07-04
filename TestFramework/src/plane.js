class Plane {
    constructor(name, destination, takenOff, atAirport, landed) {
        this._name = name;
        this._destination = destination;
        this._takenOff = takenOff;
        this._atAirport = atAirport;
        this._landed = landed;
    }
}

module.exports = Plane;