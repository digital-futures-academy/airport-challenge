const assertEquals = (val1, val2) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
}

module.exports = assertEquals