const assertEquals = (actual, expected) => actual === expected



const assetEqualsArray = (actual, expected) => {
    if (actual.length !== expected.length){
        return false
    }
    for (let i = 0; i < expected.length; i++){
        if (actual[i] !== expected[i]){
            return false
        }
    }
    return true


}

module.exports = {assertEquals, assetEqualsArray};