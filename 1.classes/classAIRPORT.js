class AIRPORT {
    constructor(_airportID = 'airportID', _defaultCapacity = 10) {

        this.listOfLandedPlanes = []; //default empty airport
        this._capacity = _defaultCapacity;
        this._weather = [];
        this.possibleWeatherConditions = ['stormy', 'clear', 'clear'];
        this._airportID = _airportID;
        this._checkIfContains = 'not checked';
    }

    checkIfContains(inputPlaneObj) {
        this.listOfLandedPlanes.forEach(elementObject => {
            if (Object.values(elementObject).includes(inputPlaneObj.planeID)) {
                this._checkIfContains = true;
                return this._checkIfContains;
            }
        });
        this._checkIfContains = false;
        return this._checkIfContains;

    }


    landAPlane(inputPlaneObj) {
        let landingMessage = 'No Landing Message'; // this will hold the an error or a success message
        let currentWeather = this.weather;

        this.checkIfContains(inputPlaneObj.planeID);

        if (this.listOfLandedPlanes.length === this._capacity) {
            landingMessage = 'Airport capacity full';
            return landingMessage;
        }
        else if (currentWeather === this.possibleWeatherConditions[0]) {
            landingMessage = `${inputPlaneObj.planeID} cannot Land as current weather is Stormy`;
            return landingMessage;
        }


        else if (this.listOfLandedPlanes.length === 0) {
            inputPlaneObj.landedAt = this._airportID;
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneObj];
            landingMessage = `${inputPlaneObj.planeID} has now landed!`;
            return landingMessage;
        }


        else if (this._checkIfContains) {

            landingMessage = `${inputPlaneObj.planeID} has already landed!`;
            return landingMessage;

        }
        else if (!this._checkIfContains) {
            inputPlaneObj.landedAt = this._airportID;
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneObj];
            landingMessage = `${inputPlaneObj.planeID} has now landed!`;
            return landingMessage;
            //return this.listOfLandedPlanes;
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
        let setWeatherMessage;
        this._weather = []; //clears the array
        setWeather = setWeather.toLowerCase();
        if (setWeather === this.possibleWeatherConditions[0]) {
            this._weather.push(setWeather);
            setWeatherMessage = this._weather[0];
        }
        else if (setWeather === this.possibleWeatherConditions[1]) {
            this._weather.push(setWeather);
            setWeatherMessage = this._weather[0];
        }
        else {
            let err = new Error('Enter valid weather condition either stormy or clear');
            setWeatherMessage = err.message;
            console.log(setWeatherMessage);
        }




    }
}

module.exports = AIRPORT;