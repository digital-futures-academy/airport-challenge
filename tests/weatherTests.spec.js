const assertEquals = require(`./test-frameworks`);
const Weather = require(`../src/weather`);

const testRandomlyGenerateWeather = () => {

    //Identity
    console.log(`testRandomlyGenerateWeather \n =========\n`);

    //Arrange
    let input = new Weather();
    let expected1 = 'Stormy'
    let expected2 = 'Sunny'

    //Act
    let actual = input.getForecast();
    //Assert

    let result = assertEquals(actual, expected) //have 2 expects so maybe use something else

    //Report
    console.log(`testRandomlyGenerateWeather result : ${result}`);

}

//Next step for tomorrow make the test pass


weatherTests = { testRandomlyGenerateWeather };



module.exports = weatherTests

