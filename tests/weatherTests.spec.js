const assertEquals = require(`./test-frameworks`);
const Weather = require(`../src/weather`);

const testRandomlyGenerateWeather = () => {

    //Identity
    console.log(`testRandomlyGenerateWeather \n =========\n`);

    //Arrange
    let input = new Weather();
    let expected = 'Stormy'

    //Act
    let actual = input.getForecast(0);
    //Assert

    let result = expected.includes(actual);

    //Report
    console.log(`testRandomlyGenerateWeather result : ${result} \n`);
    console.log(actual);

}


weatherTests = { testRandomlyGenerateWeather };



module.exports = weatherTests

