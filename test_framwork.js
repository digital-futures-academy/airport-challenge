const test = {
    assertEquals(val1, val2){
        if(val1 !== val2){throw new Error};
    },

    it(str, testfunc){
        try{
            testfunc();
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
        }catch(error){
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
            console.log(error.stack);
        }
    }
}

module.exports = test;