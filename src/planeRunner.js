const Plane = require("./Plane");

const plane1 = new Plane(1)
console.log(plane1)
const plane2 = new Plane(2)
console.log(plane2)
const list = []
list.push(plane1)
console.log(list)
function isPlaneThere(plane) {
    if (list.includes(plane) === true) {
        return true
    } else {
        return false
    }
}
console.log(isPlaneThere(plane1))

