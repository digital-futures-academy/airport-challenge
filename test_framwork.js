let pass = 0, fail = 0;

const test = {
    assertEquals(val1, val2){
        if(val1 !== val2){throw new Error};
    },

    it(str, testfunc){
        try{
            testfunc();
            pass++;
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
        }catch(error){
            fail++;
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
            console.log(error.stack);
        }
    },

    print(){
        console.log(`Passed: ${pass}. Failed: ${fail}.`)
    }
}

module.exports = test;