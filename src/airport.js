//think about private properties
// plane network class?
// airport functions class? for airport functions and to keep it cohesive
class Airport {

    maxCapacity;
    landedPlanes;
    #currentWeather;
    #airportId

    constructor(maxCapacity = 1, landedPlanes = [], airportId = 'no id') {
        this.maxCapacity = maxCapacity;
        this.landedPlanes = landedPlanes;
        this.#currentWeather = undefined;
        this.#airportId = airportId;
    };

    landPlane(plane) {
        if (this.validLandState(plane)) {
            this.landedPlanes.push(plane);
            plane.setAirportId(this.#airportId);
        }
    };

    capacityMutator(newCapacity) {
        if (newCapacity % 1 === 0 && typeof newCapacity === 'number') {
            this.maxCapacity = newCapacity;
        };
    };

    isFull() {
        return this.maxCapacity === this.landedPlanes.length;
    };

    planeTakeOff(plane) {
        if (this.#currentWeather !== 'stormy') {
            const index = this.landedPlanes.indexOf(plane);
            this.landedPlanes.splice(index, 1);
        };
    };

    getPlaneId(plane) {
        return plane.getId();
    };

    duplicateLandId(plane) {
        let isDuplicate = false;
        this.landedPlanes.forEach(function (val, index) {
            if (val.getId() === plane.getId()) {
                isDuplicate = true
            };
        })
        return isDuplicate;
    };

    getWeather(weather) {
        this.#currentWeather = weather.getWeather();
        return this.#currentWeather;
    };

    airportControl(plane, action) {
        if (action === 'land') {
            if (this.validLandState(plane)) {
                this.landPlane(plane);
            };
        };
        if (action === 'takeoff') {
            if (this.#currentWeather !== 'stormy') {
                this.planeTakeOff(plane);
            };
        };
    };

    getAirportId() {
        return this.#airportId;
    };


    setAirportId(id) {
        this.#airportId = id;
    };

    //refactoring purposes
    //this function is extremely messy but it's purpose is to clean up the above landPlane() method
    validLandState(plane) {
        let validToLand = false;
        if (!this.isFull() && plane?.getId() !== 'no id' && this.duplicateLandId(plane) === false && this.#currentWeather !== 'stormy') {
            validToLand = true;
        };
        return validToLand;
    };
};

module.exports = Airport;