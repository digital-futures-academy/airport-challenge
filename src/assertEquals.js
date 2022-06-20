const Airport = require("./airport");

const assertEquals = (Airport) => { Airport++ };

module.exports = {
    assertEquals
};

// ++: an increment operator, hoping that when a plane is added to the airport it will increase the array by one and return true ? 