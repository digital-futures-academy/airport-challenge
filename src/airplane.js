
class Airplane {
    constructor(airplaneID, inAirStatus = false){
        this.airplaneId = airplaneID;
        this.inAirStatus = inAirStatus;
    }

    getAirplaneID(){
        return this.airplaneID;
    }

    getInAirStatus(){
        return this.inAirStatus;
    }

    setInAirStatus(status){
        if (status===false){
            return this.inAirStatus = status;
        } else if (status===true){
            return this.inAirStatus = false;
        }
    }
}

module.exports={Airplane};