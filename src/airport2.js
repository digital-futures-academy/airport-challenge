class Airport2 {
    airportList = [];
    capacity = 100;
    airportSize = 99;

    landPlane = inputPlane => {
        const index1 = this.airportList.indexOf(inputPlane);
        if (this.airportSize < this.capacity && index1 === -1) {
            this.airportList.push(inputPlane);
        } else if (index1 > -1) {
            return new Error(`This plane is already in the airport`)
        } else if (this.capacity <= this.airportSize) {
            return new Error(`Airport is full`)
        }
    }

    planeTakeoff = (inputPlane) => {
        const index2 = this.airportList.indexOf(inputPlane);
        if (index2 > -1) {
            this.airportList.splice(index2, 1); // 2nd parameter means remove one item only
        } else {
            return new Error(`This plane is not in the airport`)
        }
        return this.airportList;
    }

    setCapacity(newCapacity) {
        if (newCapacity < 0) {
            newCapacity = 0;
        }
        this.capacity = newCapacity;
    }

    getCapacity() {
        return this.capacity
    }

    setAirportSize(value) {
        if (value < 0) {
            value = 0;
        }
        this.airportSize = value;
    }
}



module.exports = Airport2