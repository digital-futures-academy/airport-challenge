class Weather {
    #condition;

    constructor(condition = 'sunny') {
        this.#condition = condition;
    }

    getCondition() {
        return this.#condition;
    }

    setCondition(condition) {
        const validConditions = ['sunny', 'cloudy', 'rainy', 'stormy'];
        if (!validConditions.includes(condition)) {
            throw new Error('Invalid weather condition');
        }
        this.#condition = condition;
    }

    isStormy() {
        return this.#condition === 'stormy';
    }
}

export default Weather;
