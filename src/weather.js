class Weather{
    constructor(stormy = false){
        if(typeof(stormy) === 'boolean'){
            this._stormy = stormy;
        }
    }
    set stormy(storm){
        if(typeof(storm) === 'boolean'){
            this._stormy = storm;
        }
    }
}

module.exports = Weather; 