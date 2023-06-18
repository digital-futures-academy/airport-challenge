class Airplane {
    constructor(ID) {
        this.ID = ID;
        this.onGround = false;
        this.isAtAirport = undefined;
    }

    changeOnGroundStatus(status) {
        this.onGround = status;
    }

}



module.exports = Airplane;