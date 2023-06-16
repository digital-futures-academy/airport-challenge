class Plane {
    static lastId = 1;
    
    id;
    
    constructor() {
        this.id = ++Plane.lastId;
    }

    getId() {
        return this.id;
    }
}

module.exports = Plane;