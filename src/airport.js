class Airport {
    defaultCapacity = 2;
    airportPlanes = [];
    land = (plane) => {
        this.airportPlanes.push(plane);
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
        this.airportPlanes.pop(plane);
    }

    takeoffConfirm = (plane) => {
        if (this.airportPlanes.includes(plane) == false) {
            return "Sorry, this plane is already taken off"

        }
    }

    planeHasTakenOff = (plane) => {
        if (this.airportPlanes.includes(plane) == false) {
            return "Sorry, this plane is not at the airport so it cannot take off"
        }
    }

    planeHasLanded = (plane) => {
        let landArry;
        landArry = []
        if (landArry.includes(plane) == false) {
            landArry.push(plane)
        }
        return "Sorry, this plane is already at the airport so it cannot land"
    }

    weathergenerator = () => {
        return Math.floor(Math.random() * 2) + 1;
    }

    stormyTakeOff = () => {
        let res = Math.floor(Math.random() * 2) + 1
        if (res == 2) {
            return "Sorry, as weather is stormy the plane cannot take off"
        }
    }

    stormyLand = () => {
        let res = Math.floor(Math.random() * 2) + 1
        if (res == 2) {
            return "Sorry, as weather is stormy the plane cannot land"
        }
    }
}

module.exports = Airport;
