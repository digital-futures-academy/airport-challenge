export default class Weather {
 
  randomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);    
    return randomNumber;
  }
  getCurrentWeather() {
    if (this.randomNumber >= 1) {
      return 'clear';
    } else {
      return 'stormy';
    }
  }
}