const { assertEquals } = require(`../testing-framework`);
const Weather = require(`../src/Weather`);

let expected, actual, result, weather;

// ******************** USER CASE 16 ****************************

//Test 16 - check if the weather generator returns a weather
console.log(`\n*** START TEST 16 - check if the weather generator returns a weather ***`);

// Arrange
let kindOfWeather = [`sunny`, `stormy`];
weather = new Weather();
let weatherToday = weather.weatherGenerator();
expected = true;

// Act
for (let i = 0; i < kindOfWeather.length; i++) {
    if (kindOfWeather[i].match(weatherToday)) {
        actual = true;
        break;
    } else {
        actual = false;
    }
};

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 16 - check if the weather generator returns a weather: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
kindOfWeather, weather, weatherToday = null;

console.log(`\n *** END TEST 16 ***`)

// ******************** USER CASE 17 ****************************