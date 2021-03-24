class Plane{
    constructor(model, isFlying){
        this._model=model
        this._isFlying=false
        if (typeof isFlying=== 'boolean'){
            this._isFlying=isFlying
        }
    }

    setIsFlying(input) {
        if (typeof(input)==='boolean'){
            this._isFlying=input
        }
    }
}

module.exports=Plane