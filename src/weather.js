class Weather {
    constructor(){
        this.cond = Math.random();
    }

    conditions(){
        if(this.cond <= 0.03){
            return 'stormy';
        } else {
            return 'acceptable';
        }
    }
}

module.exports = Weather;