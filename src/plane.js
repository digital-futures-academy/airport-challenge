class Plane {
    constructor(){
        this.intheAir= true;
    }
    toLand(){
        this.intheAir = false;
    }
    toTakeOff(){
        this.intheAir =true;
    }
}
module.exports = Plane;