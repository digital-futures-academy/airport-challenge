class Weather{
    constructor(){
        this.storminess = Math.floor((Math.random() * 20) + 1)
    }
}

module.exports = Weather