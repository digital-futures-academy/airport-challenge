const Weather = require('../weather');

const StormyWeather = new Weather(() => 0);

const SunnyWeather = new Weather(() => 1);

module.exports = { StormyWeather, SunnyWeather };
