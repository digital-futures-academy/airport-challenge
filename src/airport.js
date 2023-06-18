class Airport {
    hangar;
    #maxCapacity;

    constructor(plane = [], capacity = 3) {
        this.hangar = plane;
        this.#maxCapacity = capacity;
    }

    getPlaneNum() {
        return this.hangar.length;
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    landNewPlane(plane) {
        if (this.isAirportFull() === false) {
            this.hangar.push(plane)
        };
        { console.log(`Airport is at full capacity, please divert.`) }
    }

    departPlane(plane) {
        const index = this.hangar.indexOf(plane);
        index === -1 ? console.log(`Plane not found, no departure scheduled.`) : (this.hangar.splice(index, 1),
            console.log(`${plane.id} has departed. Runway clear for take off.`));
    }

    changeMaxCapacity(number) {
        if (typeof number === 'number') {
            return this.#maxCapacity = number
        }
    }

    isAirportFull() {
        return this.getMaxCapacity() === this.getPlaneNum()
    }
};

module.exports = Airport