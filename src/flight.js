class Flight {
    constructor(capacity = 10) {
        this.airport = []
        this._capacity = capacity
    }
    land(plane) {
        if (this.airport.includes(plane)) {
            return `${plane} has already landed`
        }
        if (this.airport.length === this._capacity) {
            return `Sorry airport is full.`
        } else {
            this.airport.push(plane)
            return this.airport
        }
    }
    takeOff(plane) {
        if (!this.airport.includes(plane)) {
            return `${plane} is already flying`
        } else {
            let index = this.airport.indexOf(plane);
            if (index !== -1) {
                this.airport.splice(index, 1);
                return `${plane} has taken off successfully.`
            }
        }
    }

    /*changeCap(newCapacity) {
        this._capacity = newCapacity
        return `This airport can now hold ${newCapacity}`*/



    isFull() {
        if (this.airport.length >= this._capacity) {
            return true
        } else { return false; }
    }
}



module.exports = Flight;