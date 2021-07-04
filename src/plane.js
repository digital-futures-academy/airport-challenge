class Plane {
    constructor (name) {
        // at this point on the plane name is needed
        this._name = name;
    }
    get name () {
        return this._name;
    }

  
}

module.exports= Plane;