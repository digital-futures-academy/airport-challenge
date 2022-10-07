class Airport {
    defaultCapacity = 2;
    airportPlanes = [];
    weather = ["sunny", "stormy", "rainning", "cloudy"]
    land = (plane) => {
        if (this.airportPlanes.includes(plane)) {
            return "Sorry, this plane is already at the airport so it cannot land"
        }
        else {
            this.airportPlanes.push(plane);
            return "Please land this plane"
        }
    }

    isFull = () => {
        if (this.airportPlanes.length >= this.defaultCapacity) {
            return "Sorry, the airport is full"
        }
    }

    setCapacity = defaultCapacity => {
        this.defaultCapacity = defaultCapacity;
    }

    send = (plane) => {
        if (this.airportPlanes.includes(plane) == false) {
            return "Sorry, this plane is not at the airport so it cannot take off"
        }
        else {
            this.airportPlanes.pop(plane);
            return "Please let this plane take off"
        }
    }
}
module.exports = Airport;
