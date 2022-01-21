const Airport = require("./airportSourceCode");

class Forecast extends Airport {
 constructor (){
  this.weather = (Math.round(Math.random() * 10));
  this.stormy = null;
  this.sunny = null;
  super(this.landPlane)
 }

  checkWeather() {
    if (this.weather <= 3) {
        this.stormy = true 
        return this.landPlane(false);
    } else {
        console.log(`The airport departure and arrival operations are safe for use.`);
        this.sunny = true 
        return super.landPlane(true)
    };
  }




}  


module.exports = Forecast;