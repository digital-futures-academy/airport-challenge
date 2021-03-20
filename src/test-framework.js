class AssertEquals{
    constructor(){
        
    }
  test(input1,input2){
    if (input1 === input2){
        return true
    }
    else {
        return false
    }
    }
    testForArrays(input1,input2){
        if(input1.length !== input2.length){
            return false
        }
        else{
        for (let i=0; i<input1.length; i++){
        if (input1[i] === input2[i]){
            return true
        }
        else {
            return false
        }
        }
        }
        }
}

module.exports = AssertEquals