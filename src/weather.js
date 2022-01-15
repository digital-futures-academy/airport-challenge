class Weather {
    constructor(rng) {
        this.outcomes = [
            ['stormy', 0.2],
            ['sunny', 1],
        ];

        if (typeof rng === 'function') {
            this.rng = rng;
            return;
        }

        this.rng = Math.random;
    }

    forecast() {
        const ran = this.rng();
        return this.outcomes.find((o) => o[1] >= ran)[0];
    }
}

module.exports = Weather;
