class Plane{
    constructor(plane_name){
        this._plane = plane_name;
        this._flying = true;
    }

    set flying(bool){
        if(typeof(bool)==='boolean'){
            this._flying = bool;
        }
    }
}

module.exports = Plane;