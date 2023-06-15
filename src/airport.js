class Airport {
    #name;
    #hangar;
    #maxCapacity

    constructor(name, planes = [], capacity = 3) {
        this.#name = name;
        this.#hangar = planes;
        this.#maxCapacity = capacity;
    }

    getId() {
        return this.#hangar.getId();
    }

    getHangar() {
        this.#hangar;
    }


    getPlaneNum() {
        return this.#hangar.length;
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    landNewPlane(planeName) {
        if (this.isAirportFull() === false) {
            this.#hangar.push(planeName)
        };
    }
    //think this should be a setter - will change if I have time 
    changeCapacity(number) {
        if (typeof number === 'number') {
            this.#maxCapacity = number
        }
    }

    isAirportFull() {
        return this.getMaxCapacity() === this.getPlaneNum();

    }
};

module.exports = Airport