class Airport {

    constructor(listPlanes = [], maxCapacity = 10) {
        this.listPlanes = listPlanes;
        this.maxCapacity = maxCapacity;
        this.weather = this.generateWeather();
    }

    landPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1 && !this.isAirportFull() && this.weather !== 'stormy') {
            this.listPlanes.push(plane);
            if (this.isPlaneInAirport(plane)) {
                console.log('plane has landed');
            }
        } else {
            if (this.isAirportFull()) {
                console.log('Airport at max capacity, cannot land plane');
            } else if (this.weather === 'stormy') {
                console.log('Cannot land plane as weather is stormy');
            } else {
                console.log('Plane is already at airport');
            }
        }
    }

    sendPlane(plane) {
        const indx = this.findPlane(plane);
        if (indx === -1) {
            console.log('Plane does not exist in airport');
        } else if (this.getWeather() === 'stormy') {
            console.log('Plane cannot take off as weather is stormy');
        }
        else {
            this.listPlanes.splice(indx, 1);
        }
    }

    getCurrentCapacity() {
        return this.listPlanes.length;
    }

    setMaxCapacity(capacity) {
        this.maxCapacity = capacity;
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }

    isAirportFull() {
        return this.listPlanes.length === this.maxCapacity;
    }

    isPlaneInAirport(plane) {
        return this.listPlanes.indexOf(plane) !== -1;
    }

    findPlane(plane) {
        return this.listPlanes.indexOf(plane);
    }

    generateWeather() {
        let randNum = this.getRandomIntInclusive(1, 10);
        randNum <= 8 ? this.setWeather('clear') : this.setWeather('stormy');
    }

    setWeather(weather) {
        this.weather = weather;
    }

    getWeather() {
        return this.weather;
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



}

module.exports = Airport;
