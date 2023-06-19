const airport = require("./airport");

const item1 = { id: `item1` };
const item2 = { id: `item2` };

airport.landItem(item1);
airport.landItem(item2);

console.log(airport.listOfItem); 