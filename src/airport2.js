class Airport2 {
    airportList = [];
    capacity = 100;
    airportSize = 99;

    landPlane = inputPlane => {
        if (this.airportSize < this.capacity) {
            this.airportList.push(inputPlane);
            return this.airportList;
        } else {
            return new Error(`Aiport is full`)
        }
    }

    planeTakeoff = () => {
        if (this.airportList.length > 0) {
            this.airportList.pop();
            return this.airportList;
        }
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

let input = `plane1`
testAirport = new Airport2()
testAirport.landPlane(input);
testAirport.planeTakeoff();
actualResult = testAirport.airportList.includes(input);
console.log(`Actaul result is ${actualResult} and airport list is ${testAirport.airportList}`)

module.exports = Airport2