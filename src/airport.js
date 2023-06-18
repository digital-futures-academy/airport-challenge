class Airport {
    hangar;
    #maxCapacity;
    weather;

    constructor(plane = [], capacity = 3, weather = 'Clear') {
        this.hangar = plane;
        this.#maxCapacity = capacity;
        this.weather = weather;
    }

    getWeather() {
        return this.weather;
    }

    changeWeather(weather) {
        weather === 'Stormy' ? this.weather = 'Stormy' : weather === 'Clear' ? this.weather = 'Clear' : console.log(`Please enter valid weather conditions. Valid conditions are 'Clear' or 'Stormy'.`);
    }

    getPlaneNum() {
        return this.hangar.length;
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    changeMaxCapacity(number) {
        if (typeof number === 'number') {
            return this.#maxCapacity = number
        }
    }
    isAirportFull() {
        return this.getMaxCapacity() === this.getPlaneNum()
    }

    landNewPlane(plane) {
        this.hangar.includes(plane) ? console.log(`${plane.id} has already landed and is on standby for departure.`) : this.getWeather() === 'Stormy' ? console.log("Landing denied due to adverse weather conditions, please divert.") :
            this.isAirportFull() === false ? this.hangar.push(plane) : console.log(`Airport is at full capacity, please divert.`);
    }

    departPlane(plane) {
        const index = this.hangar.indexOf(plane);
        index === -1 ? console.log(`Plane not found, no departure scheduled.`) : this.getWeather() === 'Stormy' ? console.log(`Departure denied due to adverse weather conditions, please reschedule take-off.`) : (this.hangar.splice(index, 1), console.log(`${plane.id} has departed. Runway clear for take off.`));
    }

};

module.exports = Airport