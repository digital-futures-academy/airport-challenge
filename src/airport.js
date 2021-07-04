class Airport {
    constructor(){
        this.capacity = 10;
        this.planes = [];
    }
    landPlane(name){
        while (Math.random()*100 > 90){
            console.log('Stormy Weather Plane Cannot Land');
        }
        console.log('Sunny Weather');
        if (this.planes.length < this.capacity){
            if (this.planes.includes(name)){
                console.log('Plane already landed');
                return 'Plane already landed';
            } else console.log('Plane Landed');
            this.planes.push(name);
        } else {
            console.log('Plane not landed, airport full');
        }
    }
    capacityOverride(val){
        this.capacity = val;
        console.log(`Airport capacity is now ${val}`);
    }
    planeTakeOff(name){
        while (Math.random()*100 > 90){
            console.log('Stormy Weather Plane Cannot Takeoff');
        }
        console.log('Sunny Weather');
        if (!this.planes.includes(name)) {
            console.log('Plane not at airport');
            return 'Plane not at airport';
        } else console.log('Plane taken off');
        this.planes.splice(name,1);
    }
} 

module.exports = Airport;
