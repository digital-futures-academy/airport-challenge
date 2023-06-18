class Plane {
    constructor() {
        this.isLanded = false;
    }
    
    land() {
        if (this.isLanded) {
            throw new Error('Plane is already landed.');
        }
    
        this.isLanded = true;
    }
    
    takeOff() {
        if (!this.isLanded) {
            throw new Error('Plane is already in the air.');
        }
    
        this.isLanded = false;
    }
}

module.exports = Plane;

