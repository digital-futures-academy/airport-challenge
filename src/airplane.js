
class Airplane {
    
    constructor(airplaneName, inAir = false){
        this.airplaneName = airplaneName;
        this.inAir = inAir;
    }

    getAirplaneName(){
        return this.airplaneName;
    }

    getInAirStatus(){
        return this.inAir;
    }

    land(){
        //true = air
        //false = landed
        if (this.inAir===false){
            console.log(`${this.airplaneName} has already landed`)
            return true;
        } else if (this.inAir===true){
            this.inAir = false;
            console.log(`${this.airplaneName} has now landed`)
            return true;
        }
    }

    takeOff(){
        this.inAir = true;
        return this.confirmWithAirport();
    }

    confirmWithAirport(){
        console.log(`The ${this.airplaneName} is now in the air: ${this.inAir}`);
        return this.inAir;
    }
}

module.exports= Airplane;