export default class Weather {
 
  randomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;    
    return randomNumber;
  }
  getCurrentWeather() {
    let currentWeather;
    (this.randomNumber() === 1) ? currentWeather = 'stormy' : currentWeather = 'clear';
    return currentWeather;
  }
}
