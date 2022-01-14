const {canAddToAirport,
    canOverideCapacity,
    testFullWarning,
    testTakeOff,
    testTakeOffMessage,
    testDuplicateLandingMessage,
    testDuplicateLandingCounter,
    testTakeOffNullMessage,
    testWeather,
    testWeatherTakeOff} = require('./airport-spec.js');         //Imports all tests

let correct = 0;            //Initilises correct counters
let incorrect = 0;          //Initilises incorrect counters
let failed = [];            //Initilises list of failed tests
let count = 0;              //Initilises counter for tests run  
var answer;                 //creates variable outside of loop
let functions = [canAddToAirport(),
    canOverideCapacity(),
    testFullWarning(),
    testTakeOff(),
    testTakeOffMessage(),
    testDuplicateLandingMessage(),
    testDuplicateLandingCounter(),
    testTakeOffNullMessage(),
    testWeather(),
    testWeatherTakeOff()]             //Creates an array of all tests to then loop over



for(let i = 0; i < functions.length; i++){      //Loops through all tests in functions array
    count++;                                    //Increases counter 
    answer = functions[i]                       //answer equals first tests results and message
    if(!answer[0]){                             //If tests result is false
        console.log(`${answer[1]} \n false \n`);        //State tests message and false on the next line
        incorrect ++;                                   //Increase number of incorrect tests performed
        failed.push(count)              //Add test number to failed test list
    } else{
        correct ++;                 //If correct add to correct tests performed
    }
}
                                    //Log initialising message, then state number of tests passed and tests failed
console.log(`After the tests \n=========== \n You have passed: ${correct} \n You have failed: ${incorrect} \n=========== \n`)
if(!incorrect){             //If is falsey (zero) message you have passed
    console.log('You have passed all tests')
} else {
    console.log(`You have failed test(s) ${failed}`)        //If tasks have failed state failed tasks
}
