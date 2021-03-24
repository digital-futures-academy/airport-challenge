class Weather{
    constructor(isStormy){
        this._isStormy=false
        if (typeof isStormy=== 'boolean'){
            this._isStormy=isStormy
        }
    }

    setIsStormy(input){
        if (typeof(input)==='boolean'){
            this._isStormy=input
        }
    }
}



module.exports=Weather