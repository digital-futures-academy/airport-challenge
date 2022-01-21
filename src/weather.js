class Weather {
    stormy

    constructor() {
        this.stormy = Math.random();
        this.stormy <= 0.20 ? this.stormy = true : this.stormy = false   // here I use Math.random to generate a number, 0.2 is set to represent a 20% chance of stormy weather. 
    };

    stormyWeather() {                                                    // so that I can use the method within the test and return an error 
        if (this.stormyWeather === this.stormy) {
            return new Error(`The Plane cannot land due to the storm`)
        }
    };

};

module.exports = Weather; 