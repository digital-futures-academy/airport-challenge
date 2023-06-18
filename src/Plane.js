class Plane {

    static lastId = 0;
    id;
    
    constructor() {
        this.id = ++Plane.lastId;
    }

    getId() {
        return this.id;
    }
}

module.exports = Plane;