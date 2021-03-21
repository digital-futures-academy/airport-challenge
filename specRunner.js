var airport = require('./src/airport.js');
var Test = require('./test-framework.js');

class airporttest{
    constructor(){
        this.count = 0;
        this.totaltests = 0;
    }
    landtest(){
        let testairport = new airport();
        let output = testairport.land('bowing 43-80');
        let newTest = new Test(output, 'the bowing 43-80 has success landed at this airpor');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'land passed';
        }
        return 'land failed';
    }
    setcapacitytest(){
        let testairport = new airport();
        let output = testairport.setcapacity(5);
        let newTest = new Test(output, 'the max capacity of the airport has been set to 5');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if(finalOutput){
            this.count +=1;
            return 'setcapacity test passed';
        }
        return 'setcapacity test failed';
    }
    fulllandtest(){
        let testairport = new airport();
        testairport.land('bowing 43-80');
        testairport.land('bowing 52-90');
        let output = testairport.land('condor 52-1');
        let newTest = new Test(output, 'bowing 43-80 cannot land as the airport is at max capacity');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'fullland test passed';
        }
        return 'fullland test failed';
    }
    takeofftest(){
        let testairport = new airport();
        let output = testairport.takeoff('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 has taken off successfully and is no longer in the airport');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'takeoff test passed';
        }
        return 'takeoff test failed';
    }
    failtakeofftest(){
        let testairport = new airport();
        let output = testairport.takeoff('bowing 43-90');
        let newTest = new Test(output, 'there is no such plane at this airport and so cannot take off');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'failtakeoff test passed';
        }
        return 'failtakeoff test failed';
    }
    faillandtest(){
        let testairport = new airport();
        let output = testairport.land('bowing 43-80');
        let newTest = new Test(output, 'this plane is already at the airport and so is not available to land');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'failland test passed';
        }
        return 'failland test failed';
    }
    sormytakeofftest(){
        let testairport = new airport();
        testairport.stormy = 90;
        let output = testairport.takeoff('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 cannot take off as the weather is stormy');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'stormytakeoff test passed';
        }
        return 'stormytakeoff test failed';
    }
    stormylandtest(){
        let testairport = new airport();
        testairport.stormy = true;
        let output = testairport.land('bowing 43-80');
        let newTest = new Test(output, 'bowing 43-80 cannot land as the weather is stormy');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'stormyland test passed';
        }
        return 'stormyland test failed';
    }
    airportstatustest(){
        let testairport = new airport();
        let output = testairport.airportstatus;
        let newTest = new Test(output, 'there are currently 2 planes at the airport');
        let finalOutput = newTest.testFunction();
        this.totaltests += 1;
        if (finalOutput) {
            this.count += 1;
            return 'aairportstatus test passed';
        }
        return 'airportstatus test failed';

    }
}
console.log(airporttest.landtest);
console.log(airporttest.setcapacitytest);
console.log(airporttest.fulllandtest);
console.log(airporttest.takeofftest);
console.log(airporttest.failtakeofftest);
console.log(airporttest.faillandtest);
console.log(airporttest.sormytakeofftest);
console.log(airporttest.stormylandtest);
console.log(airporttest.airportstatustest);
