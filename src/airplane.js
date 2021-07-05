

class Airplane { 
    constructor() {
    this.planeInAir = false;
    }

    setOff ()
    {
        this.planeInAir = true;
    }
    land() 
    {
        this.planeInAir =false;
    }

}

module.exports = Airplane;