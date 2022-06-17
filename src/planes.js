class plane{
    id= [];
    departure;
    
    isInAir(plane) {
        this.id.push(plane); 
        console.log(`Plane ✈️  ${plane.id} is in the air.`);
    }
}
module.exports = plane;