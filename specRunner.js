const airport = require('./src/airport.js');
const Test = require('./test-framework.js');
let totaltests = 0;
let count = 0;
class airporttest{
    constructor(){
    }
    landtest(){
        let testairport = new airport();
        testairport.stormy(10);
        let output = testairport.land('bowing 43-90');
        let newTest = new Test(output, 'the bowing 43-90 has success landed at this airport');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'land test passed';
        }
        return 'land test failed';
    }
    setcapacitytest(){
        let testairport = new airport();
        let output = testairport.setcapacity(5);
        let newTest = new Test(output, 'the max capacity of the airport has been set to 5');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if(finalOutput){
            count +=1;
            return 'setcapacity test passed';
        }
        return 'setcapacity test failed';
    }
    fulllandtest(){
        let testairport = new airport();
        testairport.stormy(10);
        testairport.land('bowing 43-70');
        testairport.land('bowing 52-90');
        let output = testairport.land('condor 52-1');
        let newTest = new Test(output, 'the airport is at max capacity, no planes can land');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'fullland test passed';
        }
        return 'fullland test failed';
    }
    takeofftest(){
        let testairport = new airport();
        testairport.stormy(10);
        let output = testairport.takeoff('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 has taken off successfully and is no longer in the airport');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'takeoff test passed';
        }
        return 'takeoff test failed';
    }
    failtakeofftest(){
        let testairport = new airport();
        testairport.stormy(10);
        let output = testairport.takeoff('bowing 43-90');
        let newTest = new Test(output, 'there is no such plane at this airport and so cannot take off');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'failtakeoff test passed';
        }
        return 'failtakeoff test failed';
    }
    faillandtest(){
        let testairport = new airport();
        testairport.stormy(10);
        let output = testairport.land('bowing 43-80');
        let newTest = new Test(output, 'this plane is already at the airport and so is not available to land');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'failland test passed';
        }
        return 'failland test failed';
    }
    sormytakeofftest(){
        let testairport = new airport();
        testairport.stormy(90);
        let output = testairport.takeoff('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 cannot take off as the weather is stormy');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'stormytakeoff test passed';
        }
        return 'stormytakeoff test failed';
    }
    stormylandtest(){
        let testairport = new airport();
        testairport.stormy(90);
        let output = testairport.land('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 cannot land as the weather is stormy');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'stormyland test passed';
        }
        return 'stormyland test failed';
    }
    airportstatustest(){
        let testairport = new airport();
        let output = testairport.airportstatus();
        let newTest = new Test(output, 'there are currently 1 planes at the airport');
        let finalOutput = newTest.testFunction();
        totaltests += 1;
        if (finalOutput) {
            count += 1;
            return 'airportstatus test passed';
        }
        return 'airportstatus test failed';

    }
}
let test1 = new airporttest();
console.log(test1.landtest());
console.log(test1.setcapacitytest());
console.log(test1.fulllandtest());
console.log(test1.takeofftest());
console.log(test1.failtakeofftest());
console.log(test1.faillandtest());
console.log(test1.sormytakeofftest());
console.log(test1.stormylandtest());
console.log(test1.airportstatustest());
console.log(`${count} out of ${totaltests} tests passed`);