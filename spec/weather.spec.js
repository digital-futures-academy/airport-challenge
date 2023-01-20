const {assertEquals} = require ('./test-framework.js')
const {Airport} = require('../src/airport.js');
const Weather = require('../src/weather.js');
const Plane = require('../src/plane.js');

//Test weather generator
const weather = new Weather()
const plane = new Plane()
const airport= new Airport(10, weather)
airport.weather.setWeather()
console.log(airport.weather.weather)