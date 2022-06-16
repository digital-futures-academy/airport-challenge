
class Airport {
    constructor(_capacity = 10) {
        this.listOfLandedPlanes = []; //default empty airport
        this._capacity = _capacity;
        this._weather = [];
        this._weather.length = 1; // can only have one one wether condition
        this.possibleWeatherConditions = ['stormy', 'clear', 'clear'];
    }

    landAPlane(inputPlaneID) {
        let landingMessage;
        let currentWeather = this._weather[0];
        //if weather stormy
        if (currentWeather === this.possibleWeatherConditions[0]) {
            landingMessage = `${inputPlaneID} cannot Land as current weather is Stormy`;
            return landingMessage;
        }
        else if (this.listOfLandedPlanes.length === 0) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        else if (this.listOfLandedPlanes.includes(inputPlaneID)) {
            landingMessage = `${inputPlaneID} has already landed!`;
            return landingMessage;
        }

        else if (this.listOfLandedPlanes.length < this._capacity) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneID];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        else {
            const capacityError = new Error('Airport capacity full');
            landingMessage = capacityError.message;
            return landingMessage;
        }

    }

    changeCapacity(newCapacity) {
        this._capacity = newCapacity;
        return this._capacity;
    }

    takeOffPlane(inputPlaneID) {
        let takeOffMessage;
        // looping through listOfLandedPlanes to find index of inputPlaneID
        let indexNumber = this.listOfLandedPlanes.findIndex((currentLandedPlaneID) => {
            return currentLandedPlaneID === inputPlaneID;
        });
        let currentWeather = this._weather[0];
        //if weather stormy
        if (currentWeather === this.possibleWeatherConditions[0]) {
            takeOffMessage = `${inputPlaneID} cannot Take Off as current weather is Stormy`;
            return takeOffMessage;
        }

        else if (indexNumber === -1) {
            takeOffMessage = `${inputPlaneID} cannot Take Off as it is not currently in landed list of planes in the airport`;
            return takeOffMessage;
        }
        else {
            this.listOfLandedPlanes.splice(indexNumber, 1);
            takeOffMessage = `${inputPlaneID} has Taken Off! and ${inputPlaneID} is no longer in the airport!`;
            return takeOffMessage;
        }
    }

    // generates weather condition if this._weather is null
    get weather() {
        // 33.33% chance of stormy weather
        if (this._weather.length === 0) {
            //rand num between 0 and 2;
            let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
            let currentWeather = this.possibleWeatherConditions[rand];
            // console.log(currentWeather);
            this._weather.push(currentWeather);
            return currentWeather;

        }
        else {
            return this._weather[0];
        }

    }

    //sets desired weather condition
    set weather(setWeather) {
        setWeather = setWeather.toLowerCase();
        if (setWeather === this.possibleWeatherConditions[0]) {
            this._weather = []; //clears the array
            this._weather.push(setWeather);
        }
        else if (setWeather === this.possibleWeatherConditions[1]) {
            this._weather = []; //clears the array
            this._weather.push(setWeather);
        }
        else {
            this._weather = []; //clears the array
            this._weather[0] = 'Enter valid weather condition either stormy or clear';

        }
    }








}

module.exports = Airport;