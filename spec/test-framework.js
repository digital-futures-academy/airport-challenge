const test = {

    expect(item1) {
        return{
     toEqual(item2) { 
         if (item2 === item1){
         console.log('\x1b[32m%s\x1b[0m', 'Passed');
     } else {
         console.log('\x1b[31m%s\x1b[0m', 'Failed');
         console.log('\x1b[31m%s\x1b[0m', `Expected Output: ${item2}, Actual Output: ${item1}`)
         }
         }
         }
     },
   
    it(str, func) {
        console.log(`${str}:`);
        try{
            func();
    } catch(err) {
        console.log(err.stack);
        }
    },
 
}

module.exports = test;