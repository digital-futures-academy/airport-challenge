const airport = {
    listOfPlanes: [],
    capacity: 1,
    maxCapacity: 30, // maximum default capacity
    isAtAirport: function (plane) {
        return this.listOfPlanes.includes(plane);
    },
    landPlane: function (plane) {
        if (this.isAtAirport(plane)) {
            return "Plane is already at the airport, cannot land again";
        } else {
            this.listOfPlanes.push(plane); // If the plane is not at the airport, add it to the list of planes and return a success message
            return "Plane landed successfully";
        }
    },
    defaultCapacity: function (newCapacity) {
        if (newCapacity > this.maxCapacity) { //Throws an error, If the new capacity exceeds the maximum capacity
            throw new Error("Exceeded maximum capacity");
        } else {
            this.capacity = newCapacity;
        }
    },
    isFull: function () {
        return this.listOfPlanes.length >= this.capacity;
    },
    takeOff: function (plane) {
        if (this.isAtAirport(plane)) {
            const index = this.listOfPlanes.indexOf(plane); // If the plane is at the airport, find its index in the list of planes
            this.listOfPlanes.splice(index, 1); // Remove the plane from the list by splicing it at the found index
            return "Plane take-off confirmed";
        } else {
            return "Plane is not at the airport, cannot take off";
        }
    },
    isStormy: function () {
        const weatherBp = Math.random() * 2000;

        if (weatherBp < 1009) {
            return true; // stormy weather if the barometric pressure is below 1009
        } else {
            return false; // Otherwise,  it as sunny weather
        }
    },
    weatherTakeoff: function (plane) {
        if (this.isStormy()) {
            return "Plane take-off failed: Weather is stormy";
        } else {
            return this.takeOff(plane);
        }
    },
    weatherLand: function (plane) {
        if (this.isStormy()) {
            return "Plane Landing failed: Weather is stormy";
        } else {
            return this.landPlane(plane);
        }
    }

}

module.exports = airport;
