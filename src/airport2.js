class Airport2 {
    airportList = [];
    capacity = 100;

    landPlane = inputPlane => {
        this.airportList.push(inputPlane);
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
}

module.exports = Airport2