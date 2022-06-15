class Airport2 {
    airportList = [];
    capacity = 100;
    airportSize = 99;
    weather = `stormy`;

    landPlane = inputPlane => {
        const index1 = this.airportList.indexOf(inputPlane); //finds the index of the plane in the array
        if (this.airportSize < this.capacity && index1 === -1 && this.weather === `clear`) { //if airport size isn't full and if plane isn't already in array
            this.airportList.push(inputPlane); //then inputPlane will be pushed into the array
        } else if (index1 > -1) { //if the plane IS in the array then error returned
            return new Error(`This plane is already in the airport`)
        } else if (this.capacity <= this.airportSize) { //if the airport is full then error is returned
            return new Error(`Airport is full`)
        } else if (this.weather === `stormy`) {
            return new Error(`Weather is too stormy for landing`)
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