class Weather {

    #weather;
    #randomNumber
    constructor() {

        this.#weather = ''
        this.#randomNumber = Math.floor((Math.random() * 5));
        switch (this.#randomNumber) {
            case 0:
                this.#weather = 'Stormy';
                break;
            case 1:
                this.#weather = 'Sunny';
                break;
            case 2:
                this.#weather = 'Light Breeze';
                break;
            case 3:
                this.#weather = 'Rain';
                break;
            case 4:
                this.#weather = 'Snow'
                break;
        }
    }

    getForecast(weatherNumber) {
        if (weatherNumber === 0) {
            this.#weather = 'Stormy';
        }
        return this.#weather;
    }



};



module.exports = Weather



