//'Weather is stormy on rare occasion' - Let's interpret rare occasion as 20% chance of storms.

const isWeatherStormy = () => {
    let random = Math.random()
    if (random > 0.2) {
        return false;
    } else {
        return true;
    }
}

module.exports = isWeatherStormy;