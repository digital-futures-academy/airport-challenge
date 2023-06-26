class Plane {
    constructor() {
        this.isLanded = false;
    }

    
    land() {
        if (this.isLanded) {
            throw new Error ('Plane is already landed');
        }
        
        this.isLanded = true;
    }
    
    takeOff() {
        if (!this.isLanded) {
            throw new Error ('Plane is not landed');
        }
        
        this.isLanded = false;
    }
    
    isLanded() {
        return this.isLanded;
    }
}

module.exports = Plane;

