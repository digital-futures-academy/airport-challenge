class Test{
    assertEquals(val1, val2){
        return val1 === val2; 
    }
    it(testName, testFunction){
        console.log(testName); 
        console.log(testFunction()); 
        console.log(); 
    }
}

module.exports = Test; 