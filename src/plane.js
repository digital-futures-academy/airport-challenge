class Plane {
    constructor(name, flyingStatus){
        this._name = name;
        this._flyingStatus = flyingStatus;
    }
    // Getters 
    get name(){
        return this._name;
    }
    get flyingStatus(){
        return this._flyingStatus;
    }

    set flyingStatus(newStatus){
        this._flyingStatus = newStatus
    }

    // External Methods for Description
    landed() {
        this._flyingStatus = 'landed';
    }

    landing() {
        this._flyingStatus = 'landing'
    }

    flying() {
        this._flyingStatus = 'flying';
    }

    takeOff() {
        this._flyingStatus = 'take off'
    }

    // There is probably another class here that I could add to control all these different cases but I will leave that for now.
    // Also consider adding a location of the plane here as a property as well as a setter method to set the location. 

}

module.exports = Plane;