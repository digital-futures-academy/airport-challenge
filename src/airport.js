let LandingTakeoff=require('./landingTakeoff.js')

class Airport {
    constructor(name, maxCapacity=5, isStormy=false){
        this.name=name
        this._hanger=[]
        this._maxCapacity=maxCapacity
        this._isStormy=isStormy
        this.landingTakeoff = new LandingTakeoff()
    }

    isHangerFull(){
        return this._maxCapacity===this._hanger.length
    }

    get hanger(){
        return this._hanger
    }

    get maxCapacity(){
        return this._maxCapacity
    }

    setMaxCapacity(input){
        if (typeof(input)=='number'){
            this._maxCapacity=input
            return `Maximum airport capacity updated to ${this.maxCapacity}.`
        } else {
            return 'Maximum capacity not updated. Please input an integer.'
        }
    }

    setIsStormy(input){
        if (typeof(input)=='boolean'){
            this._isStormy=input
            return `Stormy weather: £{this._isStormy}.`
        } else {
            return `Please pass in true of false.`
        }
    }

    landing(plane){
        return this.landingTakeoff.landing(plane, this._hanger, this._isStormy, this.isHangerFull())
    }

    takeOff(plane){
        return this.landingTakeoff.takeOff(plane, this._hanger, this._isStormy)
    }
}

module.exports = Airport;
