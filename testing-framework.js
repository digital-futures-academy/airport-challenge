const assertEquals = (val1, val2) => {return val1 === val2};

const assertArrayEquals = (arr1, arr2) => {
    let result = true;
    if(arr1.length != arr2.length){
        result = false;
    }else{
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] != arr2[i]){
                result = false;
            }
        }
    }
    return result;
}

module.exports = {
    assertEquals,
    assertArrayEquals,
};

// ==   same value
// === same value and same type
// usually favour ===
// 2 == `2`;   // true
// 2 === `2`;  // false