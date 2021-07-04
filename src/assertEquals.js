const assertEquals = (value1, value2) => {
    if (value1.length !== value2.length) {
        return false
    }
    if (value1.toString() !== value2.toString()) {
       return false
    }
    else {
        return true
    }

}

module.exports = assertEquals;