class Airport {
    // here's a starting point for you
    constructor(airplane) {
        this.airplane = airplane
        this.airport = []
        this.capacity = 10
        this.isStormy = Math.random() <= this.chanceOfStorm
        this.chanceOfStorm = 0.2
    }
    changeCap(newCapacity) {
        this.capacity = newCapacity
        return `This airport can now hold ${newCapacity}`
    }

    landPlane(airplane) {
        if (this.airport.includes(this.airplane)) {
            return `${airplane} has already landed`
        } else if (this.isStormy >= this.chanceOfstorm)
            return 'Storm levels are high, it\'s too dangerous to land'
        if (this.airport.length >= this.capacity) {
            return `Sorry airport is full.`
        } else {
            this.airport.push(airplane)
            return this.airport
        }
    }
    isFull() {
        if (this.aiport.length >= this.capacity) {
            return false
        } else { return true; }
    }

    takeOff(airplane) {
        if (!this.airport.includes(airplane)) {
            return `${airplane} is already flying`
        } else {
            let index = this.airport.indexOf(airplane);
            if (index !== -1) {
                this.airport.splice(index, 1);
                return `${airplane} has taken off successfully.`
            } else if (this.weather() === "Stormy") {
                throw new TypeError("You cannot take off when it is stormy!")
            }
        }
        return `${airplane} could not take off.`
    }
}
module.exports = Airport;