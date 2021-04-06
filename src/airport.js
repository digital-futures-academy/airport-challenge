const Weather = require('./weather');

class Airport {
    constructor(capacity = 2, weather = new Weather()) {
        if(!Number.isInteger(capacity) || capacity < 0) {
            throw new Error('Hangar capacity must be a positive integer');
        } else this._capacity = capacity;
        this._hangar = [];
        this._weather = weather;
    }

    get hangar() {
        return this._hangar;
    }

    get capacity() {
        return this._capacity;
    }

    countPlanes() {
        return this._hangar.length;
    }

    isFull() {
        return this._hangar.length >= this.capacity;
    }

    land(plane) {
        if(this.landingCheck(plane) !== true) return this.landingCheck(plane);
        this._hangar.push(plane);
        plane.land();
        return this._hangar;
    }

    landingCheck(plane) {
        if(this._hangar.includes(plane)) return `Cannot land ${plane.id}, it is already in this airport's hangar`;
        if(!plane.flying) return `Cannot land ${plane.id}, it has already landed at a different airport`;
        if(this.isFull()) return 'Cannot land yet, the hangar is full';
        if(this._weather.isStormy()) return `Cannot land ${plane.id} in stormy weather`;
        return true;
    }

    takeOff(plane) {
        if(this.takeOffCheck(plane) !== true) return this.takeOffCheck(plane);
        this._hangar.splice(this._hangar.indexOf(plane), 1);
        plane.takeOff();
        return `Successful take off, ${plane.id} is in the air`;
    }

    takeOffCheck(plane) {
        if(plane.flying) return `Cannot take off, ${plane.id} is already in the air`;
        if(!this._hangar.includes(plane)) return `Cannot take off, ${plane.id} is not at this airport`;
        if(this._weather.isStormy()) return `${plane.id} cannot take off in stormy weather`;
        return true;
    }
}

module.exports = Airport;
