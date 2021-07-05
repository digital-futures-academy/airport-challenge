const flying = require('./flying.js');

class Airplane {
    constructor(location = flying) {
        this._location = location.name;
        location.addAirplane(this);
    }

    get location() {
        return this._location;
    }

    land(airport){
        this._location = airport.name;
    }
}

module.exports = Airplane;