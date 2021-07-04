class Airport {
    constructor(name) {
        this._name = name;
    }

    land(plane) {
        return `${plane._name} plane has just landed.`;
    }   
}

module.exports = Airport;
