const Airport = require("./airport");

const assertEquals = (value1, value2) => value1 === value2;

module.exports = {
    assertEquals
};

// I think ++ increment operator may be good to use here but unsure, hoping that when a plane is added to the airport it will increase the array by one and return true ? 