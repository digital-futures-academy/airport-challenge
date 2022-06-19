const PLANE = require('../1.classes/classPlane');



let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more changes
//console.log(globalListOfPlanes);
//let copyOfGlobalListOfPlanes = ["a"];

const copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

copyOfGlobalListOfPlanes.forEach(e => console.log(e));
console.log(copyOfGlobalListOfPlanes.length)
copyOfGlobalListOfPlanes.splice(0, 5);
copyOfGlobalListOfPlanes.forEach(e => console.log(e));
console.log(copyOfGlobalListOfPlanes.length)