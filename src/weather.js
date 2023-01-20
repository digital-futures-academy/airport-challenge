class Weather {
    #weather;
    constructor() {
        this.#weather = "sunny";  
    }
    get weather(){
        return this.#weather;
    }
   generateWeather = () => {
        if (Math.random() < 0.1) {
            return "stormy";
        } else {
            return "sunny";
        }
    }
    setWeather = () =>{
        this.#weather= this.generateWeather()   
    }
    setWeatherAsStormy = ()=>{
        this.#weather = "stormy";
    }
}

module.exports = Weather;