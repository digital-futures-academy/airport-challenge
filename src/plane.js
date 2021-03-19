class Plane{
    constructor(model, isFlying=false){
        this._model=model
        this._isFlying=isFlying
    }

    set isFlying(input) {
        this._isFlying=input
    }

    get isFlying(){
        return this._isFlying
    }

    get model() {
        return this._model
    }
}

module.exports=Plane